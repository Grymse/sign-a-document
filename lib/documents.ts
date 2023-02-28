import { User } from 'firebase/auth';
import { NewDocument } from './firebase/tablesTypes';
import { DocumentData, DocumentReference, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebase/firebase';

export function createNewDocument(owner: User | null) : Promise<DocumentReference<DocumentData>> {
  return new Promise((resolve, reject) => {
    if(owner == null) {
      reject("User is not signed in");
      return;
    }
    
      // Create document
      const newDocument : NewDocument = {
        authorID: owner.uid,
        authorDisplayName: owner.displayName || "Unknown",
        title: "My New Document",
        description: "Here comes the sun!",
        signatureGoal: 100,
        signatures: 0,
        font: "Arial",
        question: "Do you like bananas?",
        photoURL: owner.photoURL || undefined,
        createdAt: serverTimestamp(),
        publishedAt: serverTimestamp(),
        published: false,
      }

      const documentsCollectionRef = collection(firestore, "documents");
      addDoc(documentsCollectionRef, newDocument).then(ref => {
        resolve(ref);
      }).catch(err => {
        reject(err.message);
      });
  });
}