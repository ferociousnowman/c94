import firebase from 'firebase';
require ('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyDv_j-2sQGgFZwUzrmiOpRDnM7GABY4o94",
    authDomain: "stuwishlist.firebaseapp.com",
    databaseURL: "https://stuwishlist.firebaseio.com",
    projectId: "stuwishlist",
    storageBucket: "stuwishlist.appspot.com",
    messagingSenderId: "888358440549",
    appId: "1:888358440549:web:1f01bc62cf92616722c08c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();