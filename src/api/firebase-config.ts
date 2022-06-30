import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDkWypwdRFz4rAMQLhmQWQEJmUXmae81fk',
  authDomain: 'product-card-e1bb4.firebaseapp.com',
  projectId: 'product-card-e1bb4',
  storageBucket: 'product-card-e1bb4.appspot.com',
  messagingSenderId: '599806859521',
  appId: '1:599806859521:web:8438b8d9f29c6dc57a6300',
  measurementId: 'G-Q0R7RMT70P',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
