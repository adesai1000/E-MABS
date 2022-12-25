import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMbLt2d5hD0ug4iLhvf245NSC8jiDHzmI",
    authDomain: "e-mabs.firebaseapp.com",
    projectId: "e-mabs",
    storageBucket: "e-mabs.appspot.com",
    messagingSenderId: "629129004436",
    appId: "1:629129004436:web:175d9bc90d807da001bb81",
    measurementId: "G-7R7S9P2M0H"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);