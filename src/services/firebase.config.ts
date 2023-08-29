// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { FacebookAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcma4-B_-ZNuDFf26A3qu5Us6OHrX9He4',
  authDomain: 'komi-c509f.firebaseapp.com',
  projectId: 'komi-c509f',
  storageBucket: 'komi-c509f.appspot.com',
  messagingSenderId: '385238355708',
  appId: '1:385238355708:web:99874fe1addd656a999179'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new FacebookAuthProvider()

export { auth, provider }
