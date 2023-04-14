import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, serverTimestamp, Timestamp, increment } from 'firebase/firestore';
import { getStorage, TaskEvent } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase v9
const app = initializeApp(firebaseConfig);
console.log(app.name);

// Auth exports
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(app);

export { serverTimestamp, Timestamp, increment };

// Storage exports
export const storage = getStorage(app);
export { TaskEvent };

/// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data?.createdAt?.toMillis() || 0,
    updatedAt: data?.updatedAt?.toMillis() || 0,
  };
}