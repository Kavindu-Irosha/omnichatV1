import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB5PCeUcOWK4Pd0FRsFk_j3u6uJkuTLoUE",
    authDomain: "whitedev-smultifunctionalweb.firebaseapp.com",
    databaseURL: "https://whitedev-smultifunctionalweb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whitedev-smultifunctionalweb",
    storageBucket: "whitedev-smultifunctionalweb.appspot.com",
    messagingSenderId: "581755446886",
    appId: "1:581755446886:web:c094e27b90ea75f1aa6fa7",
    measurementId: "G-BWKGY2SDZ0"
};

firebase.initializeApp(firebaseConfig)
export const RlDB = getDatabase()

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;