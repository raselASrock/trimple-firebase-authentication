// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaRwDPRIQa50rKYev1AxYPozZPQEOhbjY",
  authDomain: "timple-firebase-auth-a87f8.firebaseapp.com",
  projectId: "timple-firebase-auth-a87f8",
  storageBucket: "timple-firebase-auth-a87f8.appspot.com",
  messagingSenderId: "244837800061",
  appId: "1:244837800061:web:9d7df5694e37eaf1fa3914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;