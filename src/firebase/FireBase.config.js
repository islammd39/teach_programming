// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ8GC5RdnylsENYO9wbW66sO9zlw1j2os",
  authDomain: "b610-lerning-platform-server.firebaseapp.com",
  projectId: "b610-lerning-platform-server",
  storageBucket: "b610-lerning-platform-server.appspot.com",
  messagingSenderId: "230731158313",
  appId: "1:230731158313:web:0cc6ce3250c87847e31d38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;