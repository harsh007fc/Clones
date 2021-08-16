import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDx6aQ9VxFbnemWHjqhaKRB2Cw6eT5SCck",
    authDomain: "fir-2bc57.firebaseapp.com",
    projectId: "fir-2bc57",
    storageBucket: "fir-2bc57.appspot.com",
    messagingSenderId: "612885732550",
    appId: "1:612885732550:web:60de2ee32f6bf078a58bc7",
    measurementId: "G-7DDB0SWKHR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth} ;