import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCtBzzBleimFbN9Zt3ty1qw6L1QGMsZoGo",

  authDomain: "netflixclone-992db.firebaseapp.com",

  projectId: "netflixclone-992db",

  storageBucket: "netflixclone-992db.appspot.com",

  messagingSenderId: "181771707607",

  appId: "1:181771707607:web:ad6bc0465e904ab9c37c92",

  measurementId: "G-69ZRPC2QH3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
