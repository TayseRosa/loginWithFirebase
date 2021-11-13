import React from "react";
import { View, Text, Button } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

import firebase from '../firebaseConnection';

export default function About({ route, navigation }){
    const { email } = route.params;

    return(
        <View>
            <TextInput>Bem vindo: { email } </TextInput>

        </View>
    )
}