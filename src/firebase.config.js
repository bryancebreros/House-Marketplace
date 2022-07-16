// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDSqGXS_uJF5ju_PNIe0luYVcLu2CTflPU",
  authDomain: "house-marketplace-bt.firebaseapp.com",
  projectId: "house-marketplace-bt",
  storageBucket: "house-marketplace-bt.appspot.com",
  messagingSenderId: "429556308701",
  appId: "1:429556308701:web:bb863dd7a7a4fe2cf75934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()