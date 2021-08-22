import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTAzv6HJqIAPSJJhElEPvXs2SxEjq8a6Q",
  authDomain: "disney-6641f.firebaseapp.com",
  projectId: "disney-6641f",
  storageBucket: "disney-6641f.appspot.com",
  messagingSenderId: "793298457968",
  appId: "1:793298457968:web:9e26f1b7a4ad376d7cebb5",
  measurementId: "G-M1185SQCK3"
});



const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;