import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlQvq5Jc2oIRkc_Rl_R8w7SiGIFkI1KC8",
  authDomain: "mealstogo-611e8.firebaseapp.com",
  projectId: "mealstogo-611e8",
  storageBucket: "mealstogo-611e8.appspot.com",
  messagingSenderId: "431118819944",
  appId: "1:431118819944:web:0b97dbdf890fc6ac6dd1dd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signOutRequest = () =>
  signOut(auth)
    .then(() => {})
    .catch((error) => console.log(error));
