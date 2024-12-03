import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4af49.firebaseapp.com",
  projectId: "reactchat-4af49",
  storageBucket: "reactchat-4af49.firebasestorage.app",
  messagingSenderId: "287458550986",
  appId: "1:287458550986:web:a5df020b27240405d4c033",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db=getFirestore()
