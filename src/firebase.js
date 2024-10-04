// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYKONUUChbtklJDdWoJrUcsQCItVUWkPE",
  authDomain: "react-quotes-3a3fd.firebaseapp.com",
  databaseURL: "https://react-quotes-3a3fd-default-rtdb.firebaseio.com",
  projectId: "react-quotes-3a3fd",
  storageBucket: "react-quotes-3a3fd.appspot.com",
  messagingSenderId: "167288033417",
  appId: "1:167288033417:web:99fad9f3489b6fd8cab658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };  // Export the database