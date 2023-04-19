import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './Router';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Firebase を初期化
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();