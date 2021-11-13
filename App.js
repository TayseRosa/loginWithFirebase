import React from "react";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

import Routes from './src/Routes';

export default function App(){
    return(
        <Routes />
    );
}