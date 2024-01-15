// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5lYrQaqbU2QNCPMoIKFL4crZL-7jKRLk",
  authDomain: "netflixgpt-9f040.firebaseapp.com",
  projectId: "netflixgpt-9f040",
  storageBucket: "netflixgpt-9f040.appspot.com",
  messagingSenderId: "240030412125",
  appId: "1:240030412125:web:8550942f2e75e4b2f18cb4",
  measurementId: "G-QN0T101YWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);