// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXcHLuFn2A_ZkuE7C1LujBPQk-GpesE_w",
  authDomain: "casmm-auth.firebaseapp.com",
  projectId: "casmm-auth",
  storageBucket: "casmm-auth.appspot.com",
  messagingSenderId: "633615901732",
  appId: "1:633615901732:web:e338dd6de56c40791264b1",
  measurementId: "G-CJS375YC97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
