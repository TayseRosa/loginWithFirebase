import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';

import Listagem from './src/Listagem';

import firebase from './src/firebaseConnection';

export default function App(){
  const [ nome, setNome ] = useState('Carregando...');
  const [ cargo, setCargo ] = useState();
  const [ usuarios, setUsuarios ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(()=>{

    async function dados(){
      
      await firebase.database()
      .ref('usuarios')
      .on('value', (snapshot)=>{
        setUsuarios([]);
        
        snapshot.forEach((childItem)=>{
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo
          };
          //Adiciona em setUsuarios todos os que ja tem, e mais os que está adicionando agora.
          setUsuarios(oldArray => [...oldArray, data].reverse());//reverse = serve para aparecer no topo o último item cadastrado
        })

        setLoading(false);

      })


      //Listener da Database
      /* await firebase.database()
        .ref('nome')
        .once('value', (snapshot)=>{
          setNome(snapshot.val());
        }) */

      /* await firebase.database()
        .ref('nome')
        .on('value', (snapshot)=>{
        setNome(snapshot.val());
      }) */

/*       await firebase.database()
        .ref('usuarios/1')
        .on('value', (snapshot)=>{
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      }) */
      
    //Criar um nó
    /* await firebase.database()
    .ref('tipo')
    .set('vendedor');
    } */

    //Remover um nó
    /* await firebase.database().ref('tipo').remove(); */

    /*Adicionar novo dado em child*/
    /* await firebase.database()
    .ref('usuarios')
    .child(3)
    .set({
      nome: 'ttt',
      cargo: 'Programador'
    }) */
    

    //Garantir que vai adicionar um novo dado SEM DELETAR ele
    /* await firebase.database()
    .ref('usuarios')
    .child(3)
    .update({
      nome: 'Tayse Rosa2'
    }) */

  }

    dados();

  },[]);

  async function cadastrar(){
    if(nome!=='' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;//Cria uma key dentro do nó do bd

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      });
      
      alert('Cadastrado com sucesso!');
      setNome('');
      setCargo('');

    }else{
      alert('Favor preencher todos os campos')
    }
  }

  return(
    <View style={styles.container}> 
      <Text style={styles.texto}>Nome</Text>

      <TextInput 
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto)=>setNome(texto)}
        value={nome}
      />

      <Text style={styles.texto}>Cargo</Text>

      <TextInput 
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto)=>setCargo(texto)}
        value={cargo}
      />

      <Button 
        title="Novo funcionário"
        onPress={ cadastrar }
      />

      {loading ?
        (
          <ActivityIndicator color="121212" size={45} />
        ) : 
        (
          <FlatList 
            keyExtractor={item=>item.key}
            data={usuarios}
            renderItem={({ item })=> <Listagem data={item} /> }
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10,
  },
  texto:{
    fontSize:20,
  },
  input:{
    marginBottom:10,
    padding:10, 
    borderWidth:1,
    borderColor:'#121212',
    height: 45,
    fontSize:17,
  }
  
})