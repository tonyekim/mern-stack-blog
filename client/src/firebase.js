// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tonys-blog-470cd.firebaseapp.com",
  projectId: "tonys-blog-470cd",
  storageBucket: "tonys-blog-470cd.appspot.com",
  messagingSenderId: "163701560465",
  appId: "1:163701560465:web:3831a654fa2469f2be9b30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);