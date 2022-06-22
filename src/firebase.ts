import firebase from "firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDChXQbApXMF1nhacb0gPQozEl4655EBrw",
    authDomain: "simple-push-notification-825a2.firebaseapp.com",
    projectId: "simple-push-notification-825a2",
    storageBucket: "simple-push-notification-825a2.appspot.com",
    messagingSenderId: "927762470407",
    appId: "1:927762470407:web:b7e0071e25105039fd7ca2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default firebase