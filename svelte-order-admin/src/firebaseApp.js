// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA33p3wDOUckFuiyzgAWwyYvrDugOEpdhc",
    authDomain: "caffe-svelte.firebaseapp.com",
    projectId: "caffe-svelte",
    storageBucket: "caffe-svelte.appspot.com",
    messagingSenderId: "839598945321",
    appId: "1:839598945321:web:584c741edc9bc839d09838"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore( app );
