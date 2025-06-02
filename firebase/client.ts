// for authentication and storage

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'fire-homes-course-9f138.firebaseapp.com',
  projectId: 'fire-homes-course-9f138',
  storageBucket: 'fire-homes-course-9f138.firebasestorage.app',
  messagingSenderId: '742588327187',
  appId: '1:742588327187:web:adfb5595f58ebc9fea26e6',
};

// Initialize Firebase. we only want ot initialize App once
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };

// change configuration to make it compatible  with Nexjs
// for example we export auth and storage helper functions
// from this file and we interact with them by using:
// import {auth, storage} from '@/firebase/client"
