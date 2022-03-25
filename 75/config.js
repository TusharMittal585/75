import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCWXfhpdM8U-Z8otUOdCOhC-1a1mZBPeC8",
  authDomain: "e-ride-e4802.firebaseapp.com",
  projectId: "e-ride-e4802",
  storageBucket: "e-ride-e4802.appspot.com",
  messagingSenderId: "529312548366",
  appId: "1:529312548366:web:be2962b4503a736d409e5f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
