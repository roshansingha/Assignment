import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPB10gsk_Q_Z2SMmg5JmV0iQUN0zVQS2A",
  authDomain: "ecommerce-db22c.firebaseapp.com",
  projectId: "ecommerce-db22c",
  storageBucket: "ecommerce-db22c.appspot.com",
  messagingSenderId: "633943716105",
  appId: "1:633943716105:web:b0ee6fd6dbe24054d723d8",
  measurementId: "G-43NFNV3E19",
});

const auth = firebase.auth();

export { auth };
