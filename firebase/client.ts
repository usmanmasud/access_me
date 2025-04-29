import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAunNYMbIU_4MVN_y2lxiCRqOFyM0YQzhI",
  authDomain: "accessme-99b19.firebaseapp.com",
  projectId: "accessme-99b19",
  storageBucket: "accessme-99b19.firebasestorage.app",
  messagingSenderId: "501288663677",
  appId: "1:501288663677:web:cd261f81285ed9998c4f14",
  measurementId: "G-H1EGMK657K",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
