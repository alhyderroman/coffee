// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqs4rmY9_4iFMMezdkiWanEmBvtRgXqE",
  authDomain: "coffee-store-4d2b4.firebaseapp.com",
  projectId: "coffee-store-4d2b4",
  storageBucket: "coffee-store-4d2b4.appspot.com",
  messagingSenderId: "458825696077",
  appId: "1:458825696077:web:742f42b21b385b42d06d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;