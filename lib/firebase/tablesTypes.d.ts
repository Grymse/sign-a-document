import { Timestamp } from "firebase/firestore";

export type Document = {
	authorID: string;
	authorDisplayName: string;
	title: string;
	description: string;
	signatureGoal: number;
	signatures: number;
	font: string;
	question: string;
	photoURL?: string;
	createdAt: Timestamp;
  published: boolean;
	publishedAt: Timestamp;
}

export type NewDocument = {
	authorID: string;
	authorDisplayName: string;
	title: string;
	description: string;
	signatureGoal: number;
	signatures: number;
	font: string;
	question: string;
	photoURL?: string;
	createdAt: FieldValue;
  published: boolean;
	publishedAt: FieldValue;
}


type Comment = {
  uid: string;
  displayName: string;
  photoURL?: string;
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
  photoURL?: string;
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
  photoURL?: string;
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
  photoURL?: string;
}

