import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

interface Config {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
}

const firebaseConfig:Config = {
    apiKey: "AIzaSyCntXJka0dcabOPvFwvPkwz7M1FE-DscZc",
    authDomain: "blogtech-e8926.firebaseapp.com",
    projectId: "blogtech-e8926",
    storageBucket: "blogtech-e8926.appspot.com",
    messagingSenderId: "972803103239",
    appId: "1:972803103239:web:53eef504801147822268a2",
    measurementId: "G-DKZS0E5WWS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

//FIX the firebase first then the rest will get done as well
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
//TO HERE

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const increment = firebase.firestore.FieldValue.increment;

//Helper functions

export async function getUserWithUsername(username:string){
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

export function postToJSON(doc){
    const data = doc.data();
    return {
        ...data,
        createdAt:data.createdAt.toMillis(),
        updatedAt:data.updatedAt.toMillis()
    }
}