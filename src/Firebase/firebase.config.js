// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXd1dVNdaCfP4IUxU975L857qQZhy1vdE",
    authDomain: "latest-ema-john-simple.firebaseapp.com",
    projectId: "latest-ema-john-simple",
    storageBucket: "latest-ema-john-simple.appspot.com",
    messagingSenderId: "964809670999",
    appId: "1:964809670999:web:8a12327ec02f8aae3efe12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app