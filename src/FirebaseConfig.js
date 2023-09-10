import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfHwROmxtYmiV2AEVEh2zhw-Pmc7fBvT8",
  authDomain: "cimadowndemo.firebaseapp.com",
  projectId: "cimadowndemo",
  storageBucket: "cimadowndemo.appspot.com",
  messagingSenderId: "76577808138",
  appId: "1:76577808138:web:c30eace30c35f38e97a4f3",
  measurementId: "G-P11J0RK96F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}