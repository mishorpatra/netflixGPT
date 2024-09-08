// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOhqHCTDBT1waKtFh84XkYyxK0VcFok8A",
  authDomain: "netflixgpt-849db.firebaseapp.com",
  projectId: "netflixgpt-849db",
  storageBucket: "netflixgpt-849db.appspot.com",
  messagingSenderId: "273661002613",
  appId: "1:273661002613:web:2c3f5a0f8a2590e90b893c",
  measurementId: "G-DYEKT2NG23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()