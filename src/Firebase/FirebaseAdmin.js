// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfigAdmin = {
   
    
    apiKey: "AIzaSyDOPSC0KSPz5kxr_To1-Z8BGfOgI3Kty58",
    authDomain: "fyp1admin-a17cf.firebaseapp.com",
    projectId: "fyp1admin-a17cf",
    storageBucket: "fyp1admin-a17cf.appspot.com",
    messagingSenderId: "885763475605",
    appId: "1:885763475605:web:009ca42054d70f3df3739c",
    measurementId: "G-P2705EY3ME"
};

// Initialize Firebase
const adminApp = initializeApp(firebaseConfigAdmin, "AdminApp"); // Unique name given here
export const authAdmin = getAuth(adminApp);