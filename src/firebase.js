import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyClpIbuxD3hw31lsS3kXs81dEVsMBQrXwk",
  authDomain: "e-mabs8.firebaseapp.com",
  projectId: "e-mabs8",
  storageBucket: "e-mabs8.appspot.com",
  messagingSenderId: "754993750019",
  appId: "1:754993750019:web:3c07eb8ee4e004acf96e36",
  measurementId: "G-LLJQ4M22JM",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore();
