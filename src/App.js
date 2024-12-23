import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';
import { logGa } from './utils/log';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA17ZliDsjlmFmQ4g4zJAcxoKcGOAgvFGs",
  authDomain: "portfolio-1668f.firebaseapp.com",
  projectId: "portfolio-1668f",
  storageBucket: "portfolio-1668f.firebasestorage.app",
  messagingSenderId: "475494627350",
  appId: "1:475494627350:web:a8d7d482935aab27379d37",
  measurementId: "G-4NPZ1BGD4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  useEffect(() => {
    logGa('home_page_visit');
  }, []);

  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
