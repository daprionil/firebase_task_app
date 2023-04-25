// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: "AIzaSyBfTJbuEpm8QfpkOYqb5RGLYRRJp_mFfkM",
  authDomain: "tasks-practice-pi.firebaseapp.com",
  projectId: "tasks-practice-pi",
  storageBucket: "tasks-practice-pi.appspot.com",
  messagingSenderId: "51447486781",
  appId: "1:51447486781:web:b7b87345a7099d69058d54"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db;
