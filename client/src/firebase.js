// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWE0sMk-Dp5CwmrXtIK12evGsimjdNemM",
  authDomain: "arthub-7afe8.firebaseapp.com",
  databaseURL: "https://arthub-7afe8-default-rtdb.firebaseio.com",
  projectId: "arthub-7afe8",
  storageBucket: "arthub-7afe8.appspot.com",
  messagingSenderId: "100175422304",
  appId: "1:100175422304:web:ce16260b8924d82d113405",
  measurementId: "G-695Q19Q08Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
