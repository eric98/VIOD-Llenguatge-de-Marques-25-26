// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// Altres serveis de Firebase
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVGor-ey45_fo23G_i4TChnSaB-AoFMdo",
    authDomain: "ranquing-basic.firebaseapp.com",
    projectId: "ranquing-basic",
    storageBucket: "ranquing-basic.firebasestorage.app",
    messagingSenderId: "781197350264",
    appId: "1:781197350264:web:793f86e46f7c109a83648d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);