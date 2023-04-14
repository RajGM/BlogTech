import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBfV7P8KmzPo7HkftFi09pz-86lQbl2Pj8",
    authDomain: "blogtech-b3d93.firebaseapp.com",
    projectId: "blogtech-b3d93",
    storageBucket: "blogtech-b3d93.appspot.com",
    messagingSenderId: "410250038572",
    appId: "1:410250038572:web:a850772c2c9d533d9ab089",
    measurementId: "G-M3RRTYQ2RC"
};

// Initialize Firebase v9
const app = initializeApp(firebaseConfig);
console.log(app.name);

//import firebase 9 auth


// Auth exports
export const auth = getAuth(app);//firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(app);

//export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = getStorage(app);
//export const storage = firebase.storage();
export const STATE_CHANGED = storage.TaskEvent.STATE_CHANGED;

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        createdAt: data?.createdAt.toMillis() || 0,
        updatedAt: data?.updatedAt.toMillis() || 0,
    };
}
