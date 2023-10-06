import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYaDS1bu6VPKtAq2dvSg0nY3EYpxwbuY0",
  authDomain: "comision-react-cf3b9.firebaseapp.com",
  projectId: "comision-react-cf3b9",
  storageBucket: "comision-react-cf3b9.appspot.com",
  messagingSenderId: "573810915780",
  appId: "1:573810915780:web:c7c3ce8d9cc410ba3ecc91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  
)
