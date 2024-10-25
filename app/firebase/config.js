// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBulF30ykyO3ctDAEFbTKP4aSPnaYEkQRk",
    authDomain: "illya-23877.firebaseapp.com",
    projectId: "illya-23877",
    storageBucket: "illya-23877.appspot.com",
    messagingSenderId: "392842812135",
    appId: "1:392842812135:web:b1bfd91c81f602029f6042"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
