// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJj_KQ0H2J8kOZH5zyxbRoJ-svqdbm68",
  authDomain: "netflixgpt-ee389.firebaseapp.com",
  projectId: "netflixgpt-ee389",
  storageBucket: "netflixgpt-ee389.firebasestorage.app",
  messagingSenderId: "816413323506",
  appId: "1:816413323506:web:2eae8187af4cae5ebde06b",
  measurementId: "G-67L5J87DV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
