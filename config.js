import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyByJ8RiHSsSyBUsc3jQ8XAvz7yWb_HHRow",
  authDomain: "e-library-e1ec9.firebaseapp.com",
  projectId: "e-library-e1ec9",
  storageBucket: "e-library-e1ec9.appspot.com",
  messagingSenderId: "268255211802",
  appId: "1:268255211802:web:a21b91c5994f531970fca3"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
