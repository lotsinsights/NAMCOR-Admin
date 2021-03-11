import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase/app";

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

ReactDOM.render(
  <App />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
