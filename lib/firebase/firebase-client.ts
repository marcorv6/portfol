// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCxwfiYpdXWUTXeqodIXmQ7hIt9rCkdSQ",
  authDomain: "portfolio-cdf83.firebaseapp.com",
  projectId: "portfolio-cdf83",
  storageBucket: "portfolio-cdf83.firebasestorage.app",
  messagingSenderId: "725571183054",
  appId: "1:725571183054:web:d24805d781592fd65ccb9f",
  measurementId: "G-Q97WYW1EEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
