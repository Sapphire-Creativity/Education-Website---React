// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBKbjHJyQychyYMeI7ZXp3JkXutIvMbpho",
	authDomain: "login-auth-e2c7b.firebaseapp.com",
	projectId: "login-auth-e2c7b",
	storageBucket: "login-auth-e2c7b.appspot.com",
	messagingSenderId: "279872202063",
	appId: "1:279872202063:web:09e79b5703fda83b90113a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
