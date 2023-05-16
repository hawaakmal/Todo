// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAsYu_fU79t-ZIpqnjeoQNxg47EY1OQM",
  authDomain: "todo-bc75b.firebaseapp.com",
  projectId: "todo-bc75b",
  storageBucket: "todo-bc75b.appspot.com",
  messagingSenderId: "475087405203",
  appId: "1:475087405203:web:aa0dc8487d9a089b92cd66"
};

if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };