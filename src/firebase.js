import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpIX05_esAUfXuFtSTpl758s8szOqQNR4",
  authDomain: "linkedin-clone-ps-a85ea.firebaseapp.com",
  projectId: "linkedin-clone-ps-a85ea",
  storageBucket: "linkedin-clone-ps-a85ea.appspot.com",
  messagingSenderId: "29794716580",
  appId: "1:29794716580:web:a7d28072d6d34dfcd04f31",
  measurementId: "G-6PJ4HJJ50L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
