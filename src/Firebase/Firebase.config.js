// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmdAndYXqwgVctw81HO4pPpXeBz1YvvNI",
  authDomain: "sports-news-c4e08.firebaseapp.com",
  projectId: "sports-news-c4e08",
  storageBucket: "sports-news-c4e08.appspot.com",
  messagingSenderId: "279660066118",
  appId: "1:279660066118:web:d317c115e1d65e59d8e147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app