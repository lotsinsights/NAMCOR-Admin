import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHo36tPvNzFldWVCmmpiJNmf56QANor8E",
  authDomain: "namcor-portal.firebaseapp.com",
  projectId: "namcor-portal",
  storageBucket: "namcor-portal.appspot.com",
  messagingSenderId: "880143172980",
  appId: "1:880143172980:web:0ee93947b7c30e2e279821",
  measurementId: "G-XGCENWVKHM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase
  .firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

export const $firebase = firebase;
export const auth = firebase.auth;
export const db = firebase.firestore();
export const storage = firebase.storage();
