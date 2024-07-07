// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf2Okd2aX2Sd4JQIxnlJxHpCbhUQ1umXM",
  authDomain: "user-authentication-218a4.firebaseapp.com",
  projectId: "user-authentication-218a4",
  storageBucket: "user-authentication-218a4.appspot.com",
  messagingSenderId: "796524709850",
  appId: "1:796524709850:web:65cf28a5c83725bf8ee2e3",
  measurementId: "G-JFWXY8M0YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;