// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKOBSZKqrotMKvsfIfAOb7DBPGEZZpN-Y",
  authDomain: "japoneando-9e391.firebaseapp.com",
  projectId: "japoneando-9e391",
  storageBucket: "japoneando-9e391.appspot.com",
  messagingSenderId: "344286167886",
  appId: "1:344286167886:web:b6e0ed12065281e94d941f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const authentication = getAuth(app)


function getFirestoreApp() {
  return app
}

function getFirestoreStorage(){
  return storage
}

export {getFirestoreApp, db, getFirestoreStorage, authentication}
