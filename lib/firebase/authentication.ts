import { useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signInWithPopup, } from "firebase/auth";
import type { AuthProvider, User } from "firebase/auth";
// Setup auth
auth.languageCode = 'it';

export async function signInWithProvider(provider: AuthProvider) : Promise<User> {
  
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
    .then((result) => {
      resolve(result.user);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function getCurrentUser() : User | null {
  return auth.currentUser;
}

export function signOut() : Promise<void> {
  return auth.signOut();
}

export function useAuthState() : User | null  {
  const [userState, setUserState] = useState<User | null>(getCurrentUser());

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(user);
    } else {
      setUserState(null);
    }
  });

  return userState;
}