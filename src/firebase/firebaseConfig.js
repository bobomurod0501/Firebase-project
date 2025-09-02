import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA1oiYn_4sA4QOQTljce5ssfR_AvYLMYA",
  authDomain: "mymoney-d63c3.firebaseapp.com",
  projectId: "mymoney-d63c3",
  storageBucket: "mymoney-d63c3.firebasestorage.app",
  messagingSenderId: "834945002619",
  appId: "1:834945002619:web:e76899be33f5d3ee10c6de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
