// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported} from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEZ8SuyNC6ZFh-Bq5aeX50jDTzwxpn7oo",
  authDomain: "sign-a-document.firebaseapp.com",
  projectId: "sign-a-document",
  storageBucket: "sign-a-document.appspot.com",
  messagingSenderId: "1035380312745",
  appId: "1:1035380312745:web:3e90bf2a3cc1d27d6bf7b8",
  measurementId: "G-HDK5MYDGVR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const auth = getAuth(app); 
export const firestore = getFirestore(app);