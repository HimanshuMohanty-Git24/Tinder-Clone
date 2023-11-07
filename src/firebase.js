// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBRuP4Mdt3VIPTwLlaCu2qsK8eZO2VhENs",
    authDomain: "tinder-clone-e5c81.firebaseapp.com",
    projectId: "tinder-clone-e5c81",
    storageBucket: "tinder-clone-e5c81.appspot.com",
    messagingSenderId: "372421644354",
    appId: "1:372421644354:web:dcb56556cabf8e1553dddb",
    measurementId: "G-7SY5R6X6MZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;