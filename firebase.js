import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZQX0OfI2m9_383_mbkkPi7TGBPXvLuAM",
  authDomain: "canvaswars541.firebaseapp.com",
  projectId: "canvaswars541",
  storageBucket: "canvaswars541.firebasestorage.app",
  messagingSenderId: "536740276923",
  appId: "1:536740276923:web:cf29459d6cde9fc2fb579e",
  measurementId: "G-JEG4SRT6YF"
};

// This line "turns on" the connection
const app = initializeApp(firebaseConfig);

// This line makes the Database available to your other files
export const db = getFirestore(app);
