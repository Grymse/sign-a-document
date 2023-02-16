// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Timestamp, getFirestore } from "firebase/firestore";
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);


type Document = {
  id: string;
	authorID: string;
	authorDisplayName: string;
	title: string;
	description: string;
	signatureGoal: number;
	signatures: number;
	font: string;
	question: string;
	photoURL: string;
	createdAt: Timestamp;
	publishedAt: Timestamp;
}

type Comment = {
  uid: string;
  displayName: string;
  photoURL: string;
  commentId: string;
  documentId: string;
  likes: number;
  text: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

type Like = {
  uid: string;
  displayName: string;
}

type DocumentID = string;

type User = {
  uid: string;
  photoURL: string;
  createdAt: Timestamp;
  displayName: string;
  title: string;
  description: string;
  signatures: number;
  documents: DocumentID[];
}


type UserSignature = {
  uid: string;
  documentId: string;
  displayName: string;
  photoURL: string;
  signature: string;
  fontType: string;
  createdAt: Timestamp;
  positionX: number;
  positionY: number;
  rotation: number;
  size: number;
}


type HasSignedOn = {
  uid: string;
  documentId: string;
  title: string;
  authorId: string;
  photoURL: string;
}

