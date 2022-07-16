import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA_N9YqaYnT4oM1Wn6RCHHOfIOLdU81XVI",
    authDomain: "mymoney-2cf8d.firebaseapp.com",
    projectId: "mymoney-2cf8d",
    storageBucket: "mymoney-2cf8d.appspot.com",
    messagingSenderId: "607660433648",
    appId: "1:607660433648:web:91457967285a5be4802235"
  };
  
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }