import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZQX0OfI2m9_383_mbkkPi7TGBPXvLuAM",
  authDomain: "canvaswars541.firebaseapp.com",
  projectId: "canvaswars541",
  storageBucket: "canvaswars541.firebasestorage.app",
  messagingSenderId: "536740276923",
  appId: "1:536740276923:web:73a0635344efb6d3fb579e",
  measurementId: "G-NPL4RVL4SJ"
};

// This line "turns on" the connection
const app = initializeApp(firebaseConfig);

// This line makes the Database available to your other files
export const db = getFirestore(app);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
