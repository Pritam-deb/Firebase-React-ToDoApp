import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBF2fFswWiA4w7H_iOnUUE7PhSutrCmRhI",
    authDomain: "to-do-list-e840d.firebaseapp.com",
    projectId: "to-do-list-e840d",
    storageBucket: "to-do-list-e840d.appspot.com",
    messagingSenderId: "19475025945",
    appId: "1:19475025945:web:83474538f8c646fb071a88"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {
    db
};