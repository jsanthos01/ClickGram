import firebase from "firebase/app"
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBq8I3JhBSvVtNxmUQpcNwMPpvFtDJz1mk",
    authDomain: "clickgram-842c3.firebaseapp.com",
    projectId: "clickgram-842c3",
    storageBucket: "clickgram-842c3.appspot.com",
    messagingSenderId: "1049872760036",
    appId: "1:1049872760036:web:3696c42443a8bed574c0f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };