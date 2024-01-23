// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0mUOLnm_5ITiavt1T_iVhXl6XYByfQM",
  authDomain: "lista-de-tarefas-97820.firebaseapp.com",
  projectId: "lista-de-tarefas-97820",
  storageBucket: "lista-de-tarefas-97820.appspot.com",
  messagingSenderId: "1071568716329",
  appId: "1:1071568716329:web:dd212bca388803b58b5238",
  measurementId: "G-ZSBTPYSV7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);