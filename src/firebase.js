import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCLl12e5hI4h2a521PDIcbTqu_UMb67BOo",
    authDomain: "finalproject-8c763.firebaseapp.com",
    databaseURL: "https://finalproject-8c763-default-rtdb.firebaseio.com",
    projectId: "finalproject-8c763",
    storageBucket: "finalproject-8c763.appspot.com",
    messagingSenderId: "101981797931",
    appId: "1:101981797931:web:64f4f073174b19ef8b746e"
})

const db = app.firestore();
const auth = app.auth()

export {db , auth};
export default app
