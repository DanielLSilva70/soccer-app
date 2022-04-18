// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChGJAcHUyeucbhrgfbGRXCuQwkBYW-dDw",
  authDomain: "soccer-standings-app.firebaseapp.com",
  projectId: "soccer-standings-app",
  storageBucket: "soccer-standings-app.appspot.com",
  messagingSenderId: "6380872752",
  appId: "1:6380872752:web:e5b9b22aeb7c5a0f2539f5",
  measurementId: "G-849KFZNNSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default app;


// export function signup(fullNameRef, emailRef, passwordRef) {
//     return createUserWithEmailAndPassword(auth, fullNameRef, emailRef, passwordRef);
// }