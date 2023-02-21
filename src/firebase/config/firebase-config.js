import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCByaajwof_AlhQM9eh0vnVZlWAYB294Yg',
  authDomain: 'tennisscore-86be3.firebaseapp.com',
  projectId: 'tennisscore-86be3',
  storageBucket: 'tennisscore-86be3.appspot.com',
  messagingSenderId: '326777785709',
  appId: '1:326777785709:web:49e44dd2986a0a6c1c9e64'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

console.log(process.env);
if (process.env.NODE_ENV === 'development') {
  const firebasePort = process.env.firebasePort || 8080;
  connectFirestoreEmulator(db, 'localhost', firebasePort);
}

export default firebaseApp;
export { db };
