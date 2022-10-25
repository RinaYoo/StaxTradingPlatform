// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYT5CZbjA8hvQWGCfQ44vjGO2Pjc2Hl18",
  authDomain: "stax-trading-platform.firebaseapp.com",
  projectId: "stax-trading-platform",
  storageBucket: "stax-trading-platform.appspot.com",
  messagingSenderId: "444242146528",
  appId: "1:444242146528:web:eb3c4eb38ee4bc774e0c85",
  measurementId: "G-G42T3DRTEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();