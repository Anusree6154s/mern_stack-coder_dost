import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtC9MUyyixWe_bX_vLWEh798h4bVFQK6k",
  authDomain: "react-chat-app-53b6d.firebaseapp.com",
  databaseURL: "https://react-chat-app-53b6d-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-53b6d",
  storageBucket: "react-chat-app-53b6d.appspot.com",
  messagingSenderId: "145689021844",
  appId: "1:145689021844:web:dff8859518a7bd5c3a5381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App></App></React.StrictMode>
)