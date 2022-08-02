import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5v9fRU56FEoXeCozyacEaF51noE38vIY",
  authDomain: "modern-react-app-9d0a7.firebaseapp.com",
  projectId: "modern-react-app-9d0a7",
  storageBucket: "modern-react-app-9d0a7.appspot.com",
  messagingSenderId: "94712966631",
  appId: "1:94712966631:web:459cd3e25c404bf694e142",
};

initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage();
export {db,storage}