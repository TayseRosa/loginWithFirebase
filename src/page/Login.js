import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator} from 'react-native';

import firebase from '../firebaseConnection';

export default function Login({ navigation }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email.trim(), password)
    .then( (value) => {
        setUser(value.user.email);
        //Navegar para outra página
        navigation.navigate('About', {
            email: value.user.email,
        });
    })
    .catch( (error) => {
        alert('Ops algo deu errado!');
        return;
    })

    setEmail('');
    setPassword('');
  }

  return(

          <View style={styles.container}>
            <Text style={styles.texto}>Email</Text>
            <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setEmail(texto) }
            value={email}
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setPassword(texto) }
            value={password}
            />

            <Button
            title="Acessar"
            onPress={logar}
            />

              <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>
                {user}
              </Text>

          </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});