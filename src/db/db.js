import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4ZW8cIP6AMsoh2cyeTyDBDGzRpynz1Sk",
    authDomain: "ecommerce-fharo-coderhouse.firebaseapp.com",
    projectId: "ecommerce-fharo-coderhouse",
    storageBucket: "ecommerce-fharo-coderhouse.appspot.com",
    messagingSenderId: "567860708617",
    appId: "1:567860708617:web:5d8dc33102fb942012ffd8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db