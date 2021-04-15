import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC6Xd6qy3f46xjYqyga92jGYtrez-OvXCA',
  authDomain: 'tf-cargill.firebaseapp.com',
  projectId: 'tf-cargill',
  storageBucket: 'tf-cargill.appspot.com',
  messagingSenderId: '145254485404',
  appId: '1:145254485404:web:0b4066307de2aa0b500c59',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
