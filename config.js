// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM3p4X0F69ysPMVDmCQ1HkunnxWLBFlYQ",
  authDomain: "log-in---sign-up-2d48b.firebaseapp.com",
  projectId: "log-in---sign-up-2d48b",
  storageBucket: "log-in---sign-up-2d48b.appspot.com",
  messagingSenderId: "592635634754",
  appId: "1:592635634754:web:2358066ceb6c82e91839db",
  measurementId: "G-Q6P1T55LGF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);