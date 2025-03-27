import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-piHxQBddoukJiI3ACmgy-fchl1spplk",
  authDomain: "course-management-system-7a9a2.firebaseapp.com",
  projectId: "course-management-system-7a9a2",
  storageBucket: "course-management-system-7a9a2.firebasestorage.app",
  messagingSenderId: "990961721285",
  appId: "1:990961721285:web:28ed0565434e7e53c975ac",
  measurementId: "G-36C3EB8BKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
