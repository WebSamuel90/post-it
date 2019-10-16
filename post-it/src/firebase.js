import firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config();

// import {
//     API_KEY,
//     AUTH_DOMAIN,
//     DATABASE_URL,
//     PROJECT_ID,
//     MESSAGE_SENDER_ID,
//     APP_ID
// } from 'dotenv';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firestore = firebase.firestore();

window.firebase = firebase;


export default firebase;