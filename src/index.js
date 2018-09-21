import React from "react";
import ReactDOM from "react-dom";
import { StyledApp } from "./App";
import registerServiceWorker from "./registerServiceWorker";
import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyC9gv-0fyrq-Uxskb5vedNdW2E5X7Z3I20",
    authDomain: "wedding-site-c681c.firebaseapp.com",
    databaseURL: "https://wedding-site-c681c.firebaseio.com",
    projectId: "wedding-site-c681c",
    storageBucket: "wedding-site-c681c.appspot.com",
    messagingSenderId: "973214607883"
  });

ReactDOM.render(<StyledApp />, document.getElementById("root"));
registerServiceWorker();
