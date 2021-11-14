import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBvm0-AJ7UF9nXL8mjDcpsqwjUA1_JFqA",
  authDomain: "privacy-protector-8fcbb.firebaseapp.com",
  projectId: "privacy-protector-8fcbb",
  storageBucket: "privacy-protector-8fcbb.appspot.com",
  messagingSenderId: "286939098454",
  appId: "1:286939098454:web:7e62588b058802c5003af7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize Fire services

export const fbStore = firebase.firestore();
export const fbAuth = firebase.auth();
