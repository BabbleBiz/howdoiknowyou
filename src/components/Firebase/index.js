import firebase from 'firebase';
import firebaseConfig from '../../secret'

const config = firebaseConfig


  // Initialize Firebase
firebase.initializeApp(config);

export default firebase;
