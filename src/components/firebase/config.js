// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr6hcmJlgPOUJI3NDH1rOJdfVAbZBQ31I",
  authDomain: "airdrop-checker-deed0.firebaseapp.com",
  projectId: "airdrop-checker-deed0",
  storageBucket: "airdrop-checker-deed0.appspot.com",
  messagingSenderId: "564983029697",
  appId: "1:564983029697:web:d9149052cf08053001d940",
  measurementId: "G-CGPG5YEF9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);