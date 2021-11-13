import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAlKYk0Z7D93upKXuNLxOe7zxBG4ZJ9YwA",
  authDomain: "meuapp-ef3a0.firebaseapp.com",
  projectId: "meuapp-ef3a0",
  storageBucket: "meuapp-ef3a0.appspot.com",
  messagingSenderId: "854119271737",
  appId: "1:854119271737:web:6b856b15f586b6aad82ce8",
  measurementId: "G-GQM92WRJWW"
};

if(!firebase.apps.length){
    //Abrir minha conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase;