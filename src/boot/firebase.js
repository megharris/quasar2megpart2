import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoueU-ZA14SU4HyFbIgJOY_kl3APyp-fE",
  authDomain: "quitter711.firebaseapp.com",
  projectId: "quitter711",
  storageBucket: "quitter711.appspot.com",
  messagingSenderId: "512004044236",
  appId: "1:512004044236:web:d878d3acd1dbc5fd299969"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
