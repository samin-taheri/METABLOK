// Import the functions you need from the SDKs you need
import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyA2dFgwzL2ZP7hR3hqtWFq11rl70tI4nss",
    authDomain: "metablok-25c9b.firebaseapp.com",
    projectId: "metablok-25c9b",
    storageBucket: "metablok-25c9b.appspot.com",
    messagingSenderId: "88410767948",
    appId: "1:88410767948:web:763cafebfdd5eea164eae9"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app= firebase.app()
}
const auth = firebase.auth()

export {auth}

