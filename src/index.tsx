import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons(/* optional base url */);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  //  <GoogleOAuthProvider clientId="236717214097-jmdc31nh8d2h5mim0it1gbdvrja94cg2.apps.googleusercontent.com">
        
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
//  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();