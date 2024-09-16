// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq4xIXR8PYMA2ULVwT4j5GljDRYkJ5IX4",
  authDomain: "ema-john-shopping-firebase.firebaseapp.com",
  projectId: "ema-john-shopping-firebase",
  storageBucket: "ema-john-shopping-firebase.appspot.com",
  messagingSenderId: "872724120316",
  appId: "1:872724120316:web:54a8dd2919dfdca8ffcd79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;