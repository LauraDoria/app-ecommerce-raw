// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_R1MlNDJ94gndHvDs2ypP1m8aE08DhD0",
  authDomain: "ecommerce-raw-30ab6.firebaseapp.com",
  projectId: "ecommerce-raw-30ab6",
  storageBucket: "ecommerce-raw-30ab6.appspot.com",
  messagingSenderId: "575116869242",
  appId: "1:575116869242:web:11141f94471232fa2dc5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDataBase = getFirestore(app)

export default firestoreDataBase