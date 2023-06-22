
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvXQxMPNjsJm6p3X0T761yU404ag-9Pyk",
  authDomain: "blog-866b0.firebaseapp.com",
  projectId: "blog-866b0",
  storageBucket: "blog-866b0.appspot.com",
  messagingSenderId: "475660829336",
  appId: "1:475660829336:web:78fb56a2b8dc2ef44386ed"
};


const appee = initializeApp(firebaseConfig);
const  db=getFirestore(appee);
export default db;