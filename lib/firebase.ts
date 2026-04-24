import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkDVTckUkuzvNAsRAaXmcCDTlbw04v53U",
  authDomain: "martha-cares-nails.firebaseapp.com",
  projectId: "martha-cares-nails",
  storageBucket: "martha-cares-nails.firebasestorage.app",
  messagingSenderId: "1066491604893",
  appId: "1:1066491604893:web:ee771ce8f68068cb688974",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
