import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBm4bslSgPjJblx2rVmqgDgFRzHXGDYW2k",
  authDomain: "crw-db-1b114.firebaseapp.com",
  projectId: "crw-db-1b114",
  storageBucket: "crw-db-1b114.appspot.com",
  messagingSenderId: "771621726243",
  appId: "1:771621726243:web:b09f8e446ec13072d96996",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
