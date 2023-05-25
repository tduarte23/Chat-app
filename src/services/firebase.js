import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkh8va36NXfxKIJQv2Oe48KjR27WoD_NI",
    authDomain: "chat-app-5a8fd.firebaseapp.com",
    projectId: "chat-app-5a8fd",
    storageBucket: "chat-app-5a8fd.appspot.com",
    messagingSenderId: "61463554160",
    appId: "1:61463554160:web:7575d318ee66d727606cb5"
  };

  const app = firebase.initializeApp(firebaseConfig);
  
  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}