// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDds9eHvo6YGwNexUPAi99MQm94DfKtbVk",
  authDomain: "giancarlos-food.firebaseapp.com",
  projectId: "giancarlos-food",
  storageBucket: "giancarlos-food.appspot.com",
  messagingSenderId: "229458785815",
  appId: "1:229458785815:web:5dc7be3ec731b05a8b0e52",
  measurementId: "G-M1WC0MYW59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);