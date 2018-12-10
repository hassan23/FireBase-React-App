import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCEbmVaL_lYJH4MpZVmnzr5h4vACj0PFjE",
  authDomain: "ninja-marioplan-7d953.firebaseapp.com",
  databaseURL: "https://ninja-marioplan-7d953.firebaseio.com",
  projectId: "ninja-marioplan-7d953",
  storageBucket: "ninja-marioplan-7d953.appspot.com",
  messagingSenderId: "606985142130"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
