// / Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDzGIX0bPn0xddUZ1ckG_qZAAfRdqcOoAs",

    authDomain: "chat-app-leshperi.firebaseapp.com",

    projectId: "chat-app-leshperi",

    storageBucket: "chat-app-leshperi.appspot.com",

    messagingSenderId: "1015845578987",

    appId:"1:1015845578987:web:d10322e3a56be7c1a2b6ae"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app)