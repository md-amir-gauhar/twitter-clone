import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCUgekWcBb02Bv86hdxRChWBiDvWWeWnTE',
  authDomain: 'twitter-clone-850c2.firebaseapp.com',
  databaseURL: 'https://twitter-clone-850c2.firebaseio.com',
  projectId: 'twitter-clone-850c2',
  storageBucket: 'twitter-clone-850c2.appspot.com',
  messagingSenderId: '330966624977',
  appId: '1:330966624977:web:8b23697eb112ca8bed73f0',
  measurementId: 'G-KVH7V62NNG',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
