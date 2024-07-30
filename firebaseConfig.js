import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiVpUIJQGP7rbbyZ7t0_5Hmvr2p4Z0luw",
  authDomain: "pantry-app-ea6b3.firebaseapp.com",
  projectId: "pantry-app-ea6b3",
  storageBucket: "pantry-app-ea6b3.appspot.com",
  messagingSenderId: "627098978971",
  appId: "1:627098978971:web:7b4d06fc9d95f48894943e",
  measurementId: "G-6KMXGXYDQ4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
