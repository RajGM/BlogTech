import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

console.log("<===FIREBASE===>");
console.log(firebase);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

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