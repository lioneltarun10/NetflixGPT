// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaSNZsuJYHAkpjKP1Uj4badmZZkzhTzA0",
  authDomain: "netflixgpt-cb99c.firebaseapp.com",
  projectId: "netflixgpt-cb99c",
  storageBucket: "netflixgpt-cb99c.appspot.com",
  messagingSenderId: "479941503584",
  appId: "1:479941503584:web:de96b1e4abfa3a97567105",
  measurementId: "G-ZWFMFWB314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();