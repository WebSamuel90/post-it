import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
require('dotenv').config();

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
export const auth = firebase.auth();
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    // Get a reference to the place in the database where a user profile might be
    const userRef = firestore.doc(`users/${user.uid}`);

    // Go and fetch the document from that location
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = user;
        try {
            await userRef.set({
                displayName,
                email,
                ...additionalData
            })
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }

    return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.collection('users').doc(uid).get();

        return { uid, ...userDocument.data() };
    } catch (error) {
        console.error('Error fetching user', error.message);
    }
};

export default firebase;