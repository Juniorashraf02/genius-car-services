// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2lp20t3WCKZ-3r9m7TQh-j3MFYTnT_04",
  authDomain: "genius-car-services-b5f6b.firebaseapp.com",
  projectId: "genius-car-services-b5f6b",
  storageBucket: "genius-car-services-b5f6b.appspot.com",
  messagingSenderId: "231742615748",
  appId: "1:231742615748:web:b2cf7615a9fc84f62ad991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;