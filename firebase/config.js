// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHuyOv6_fqzPTP-4JAUAb9fV5mD-aAvVI",
  authDomain: "myfirstapp-7b382.firebaseapp.com",
  projectId: "myfirstapp-7b382",
  storageBucket: "myfirstapp-7b382.appspot.com",
  messagingSenderId: "639094879322",
  appId: "1:639094879322:web:82c93f0b667d616f02d463",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
