// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vidnova-2328d.firebaseapp.com",
  projectId: "vidnova-2328d",
  storageBucket: "vidnova-2328d.firebasestorage.app",
  messagingSenderId: "114976371240",
  appId: "1:114976371240:web:bace798b65eee26d20bb1d",
  measurementId: "G-Q5XY2ZKCSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
