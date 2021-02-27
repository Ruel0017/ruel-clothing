import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPlDIG9OysyVV-cj6q-9AUACh2ZOTj8LY",
    authDomain: "crwn-db-67ea7.firebaseapp.com",
    projectId: "crwn-db-67ea7",
    storageBucket: "crwn-db-67ea7.appspot.com",
    messagingSenderId: "629258123817",
    appId: "1:629258123817:web:6705301ef31abf1a267a38",
    measurementId: "G-QXCPLWTVQ3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;