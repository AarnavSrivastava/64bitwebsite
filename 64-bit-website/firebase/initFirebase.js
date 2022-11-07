// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import 'firebase/compat/firestore'
import 'firebase/compat/analytics'
import 'firebase/compat/performance'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_BIT_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_BIT_FB_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_BIT_FB_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_BIT_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_BIT_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_BIT_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_BIT_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_BIT_FB_MEASUREMENT_ID
};

export const app = initializeApp(clientCredentials);

export const firestore = getFirestore(app);