// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBruUKZ1BtQFrsRIRIWNkN4r2YVOL637Q0",
  authDomain: "stax-trading.firebaseapp.com",
  projectId: "stax-trading",
  storageBucket: "stax-trading.appspot.com",
  messagingSenderId: "935772813825",
  appId: "1:935772813825:web:de1eb4b1bd672f9f0d5e00",
  measurementId: "G-YBHHDEZV1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;