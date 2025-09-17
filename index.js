import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './Button';
import ReactStyles from './ReactStyles';
import Rendering from './Rendering';
import HooksUseStatePart1 from './HooksUseStatePart1';
import HooksUseStatePart2 from './HooksUseStatePart2';
import HooksUseStateExercise01 from './HooksUseStateExercise01';
import HooksUseStateExercise02 from './HooksUseStateExercise02';
import HooksUseStateMiniProject from './HooksUseStateMiniProject';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('rootElement'));
root.render(
  <React.StrictMode>
  <App />
  <Button />
  <ReactStyles />
  <Rendering />
  <HooksUseStatePart1 />
  <HooksUseStatePart2 />
  <HooksUseStateExercise01 />
  <HooksUseStateExercise02 />
  <HooksUseStateMiniProject />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
