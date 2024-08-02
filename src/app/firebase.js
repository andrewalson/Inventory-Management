// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCefPL8RBxNLNmH1VW7fJjwHMJWjEZeI_Y",
  authDomain: "inventory-management-647c7.firebaseapp.com",
  projectId: "inventory-management-647c7",
  storageBucket: "inventory-management-647c7.appspot.com",
  messagingSenderId: "612871760320",
  appId: "1:612871760320:web:fd1e46db8bafc3b7384025",
  measurementId: "G-FWX4SG0YBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };