import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAq-pNfipOM2jraEnA3HSfTUCPQFeQoTuo",
    authDomain: "booksanta-e0596.firebaseapp.com",
    projectId: "booksanta-e0596",
    storageBucket: "booksanta-e0596.appspot.com",
    messagingSenderId: "64994593998",
    appId: "1:64994593998:web:56c71eb04b52167039549f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()