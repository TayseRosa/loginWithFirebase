import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

//Import Pages
import Login from "./page/Login";
import About from "./page/About";

export default function(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="Login with Firebase" component={Login} />
                <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}