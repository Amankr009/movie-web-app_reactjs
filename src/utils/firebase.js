// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJIOyVvVXPwXA7qf1uAC5jez3VegbRSxg",
  authDomain: "moviegpt-f9566.firebaseapp.com",
  projectId: "moviegpt-f9566",
  storageBucket: "moviegpt-f9566.appspot.com",
  messagingSenderId: "953232222223",
  appId: "1:953232222223:web:56e2e53936076ff4bf1b7a",
  measurementId: "G-1RDVZ0KGV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();