import firebase from 'firebase/app'
import 'firebase/firestore'


const app = firebase.initializeApp ({
    apiKey: "AIzaSyDMTpJcMwi4u0P5tqjj3SvHfMFvEMwY1FA",
    authDomain: "proyecto-rl.firebaseapp.com",
    projectId: "proyecto-rl",
    storageBucket: "proyecto-rl.appspot.com",
    messagingSenderId: "405523091932",
    appId: "1:405523091932:web:2174fb764b62add3b77f19"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}
