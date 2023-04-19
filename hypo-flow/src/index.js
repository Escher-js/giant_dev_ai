import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();