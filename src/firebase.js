// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOXGEtt2AkwAJRwkUGIVuKQtBpWmHOO1I",
  authDomain: "vue3-firebase-app-97b34.firebaseapp.com",
  projectId: "vue3-firebase-app-97b34",
  storageBucket: "vue3-firebase-app-97b34.appspot.com",
  messagingSenderId: "22689734742",
  appId: "1:22689734742:web:2de2ff214878243f0e1bf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize firestore
const db = getFirestore(app);
//use db collection
const citiesColRef = collection(db, "cities");

export default citiesColRef;
