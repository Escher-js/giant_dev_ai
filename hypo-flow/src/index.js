import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './Router';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMjh5stYg-eS6Kieh41kidfFB8kfJZ51k",
  authDomain: "giant-5f8b5.firebaseapp.com",
  databaseURL: "https://giant-5f8b5-default-rtdb.firebaseio.com",
  projectId: "giant-5f8b5",
  storageBucket: "giant-5f8b5.appspot.com",
  messagingSenderId: "780424691274",
  appId: "1:780424691274:web:bff36dd9c78b976f26b0b3",
  measurementId: "G-0RRPYVS1FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();