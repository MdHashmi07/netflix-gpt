// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFjCj1rWD_VpJqrqoVGTux0bBuA2f5Nyg",
  authDomain: "netflixgpt-8e136.firebaseapp.com",
  projectId: "netflixgpt-8e136",
  storageBucket: "netflixgpt-8e136.appspot.com",
  messagingSenderId: "278473547288",
  appId: "1:278473547288:web:0063ac3ccefee512732d6d",
  measurementId: "G-KBD6EB9TTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();