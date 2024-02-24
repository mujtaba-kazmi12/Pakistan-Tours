// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage'; 
const firebaseConfigUsers = {
   
    
    apiKey: "AIzaSyAeIkYq6gJSrxzPSPYBEJHh43AGBeiTK_I",
  authDomain: "fyp1users.firebaseapp.com",
  projectId: "fyp1users",
  storageBucket: "fyp1users.appspot.com",
  messagingSenderId: "345830890988",
  appId: "1:345830890988:web:037179a88d9bdf93e8f4c9",
  measurementId: "G-8TTCPTPNRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfigUsers,'UserApp');
export const db=getFirestore(app)
export const auth=getAuth(app)
export const storage = getStorage(app);