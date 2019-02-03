import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBLx0tNVKhMMguu1M0TUwQzkp4Gc2jseYU",
    authDomain: "project-management-tool-470e9.firebaseapp.com",
    databaseURL: "https://project-management-tool-470e9.firebaseio.com",
    projectId: "project-management-tool-470e9",
    storageBucket: "project-management-tool-470e9.appspot.com",
    messagingSenderId: "990376030866"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebase;