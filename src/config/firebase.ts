import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASGOM7eD3S-vTXpo869ctfbIk2jzqUbXY",
  authDomain: "pocketretail-742e1.firebaseapp.com",
  projectId: "pocketretail-742e1",
  storageBucket: "pocketretail-742e1.firebasestorage.app",
  messagingSenderId: "124604480117",
  appId: "1:124604480117:web:7e387e67f02936c2b9963c",
  measurementId: "G-4QY5Y5R5KL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);