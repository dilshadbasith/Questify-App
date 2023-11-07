// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbefbBssVnhsrV-7KAgpOjjgMG7PbNyIA",
  authDomain: "quora-clone-mern-caf4a.firebaseapp.com",
  projectId: "quora-clone-mern-caf4a",
  storageBucket: "quora-clone-mern-caf4a.appspot.com",
  messagingSenderId: "1043333313161",
  appId: "1:1043333313161:web:52b580e7f5530a71664c58",
  measurementId: "G-F4VRVVSKC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider=new GoogleAuthProvider()

export {auth,provider}
