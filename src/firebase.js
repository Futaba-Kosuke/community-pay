import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB5GNYOA5PR8dc9o18XylcAXwnuog84Pyw",
  authDomain: "test-project-ac885.firebaseapp.com",
  databaseURL: "https://test-project-ac885.firebaseio.com",
  projectId: "test-project-ac885",
  storageBucket: "test-project-ac885.appspot.com",
  messagingSenderId: "650962274071",
  appId: "1:650962274071:web:7fc9d874024a55fca81952",
  measurementId: "G-GZ767WB79N"
}

firebase.initializeApp(firebaseConfig)

export default firebase;