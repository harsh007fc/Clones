import firebase from 'firebase'

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCw9GJ56ubm_ZXWwsGhaPk1dZW0544a6NQ",
  authDomain: "instagram-clone-16d31.firebaseapp.com",
  projectId: "instagram-clone-16d31",
  storageBucket: "instagram-clone-16d31.appspot.com",
  messagingSenderId: "734365035689",
  appId: "1:734365035689:web:577cc9e06506f46b514db8",
  measurementId: "G-VXG7VNMPQ5"
});

let db = firebaseApp.firestore();
let auth = firebase.auth();
let storage = firebase.storage();

export {db,auth,storage}