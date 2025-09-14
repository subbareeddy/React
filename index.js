import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './Button';
import ReactStyles from './ReactStyles';
import Rendering from './Rendering';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('rootElement'));
root.render(
  <React.StrictMode>
  <App />
    <Button />
    <ReactStyles />
    <Rendering />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
