import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvAUpHAuq8kVNPTtSGM5AXZVjobquwc4c",
  authDomain: "warmpaws-a5454.firebaseapp.com",
  projectId: "warmpaws-a5454",
  storageBucket: "warmpaws-a5454.firebasestorage.app",
  messagingSenderId: "72607266667",
  appId: "1:72607266667:web:3e96bf7141a99e39b63e2e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);