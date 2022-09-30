import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzLDtGOQe00b-UCc6ySJUWbDOfzTYOve0',
  authDomain: 'babyset-store.firebaseapp.com',
  projectId: 'babyset-store',
  storageBucket: 'babyset-store.appspot.com',
  messagingSenderId: '159313306321',
  appId: '1:159313306321:web:ea5089e1c9acabeee95bf0',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
