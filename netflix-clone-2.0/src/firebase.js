import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhwc57nXD4M6UlF_faD-yXiGgHTsYYhfk",
  authDomain: "netflix-clone-2-12292.firebaseapp.com",
  projectId: "netflix-clone-2-12292",
  storageBucket: "netflix-clone-2-12292.appspot.com",
  messagingSenderId: "356555683694",
  appId: "1:356555683694:web:9e79c5e69b1d5b9ab3337f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
