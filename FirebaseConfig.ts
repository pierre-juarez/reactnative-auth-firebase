// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB_w9p4lxck2doeb89b3YLFt34tzdRHfI",
  authDomain: "loginfirebase-reactnative.firebaseapp.com",
  projectId: "loginfirebase-reactnative",
  storageBucket: "loginfirebase-reactnative.appspot.com",
  messagingSenderId: "926289330242",
  appId: "1:926289330242:web:61ccb361d67ed492faeddb"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
