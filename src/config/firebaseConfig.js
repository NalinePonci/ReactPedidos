import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAU8XVoHzRLKIy8XdF1zHi0T5MeE0ueDxc",
    authDomain: "acaiponci.firebaseapp.com",
    projectId: "acaiponci",
    storageBucket: "acaiponci.appspot.com",
    messagingSenderId: "1025404380596",
    appId: "1:1025404380596:web:260adbd7199d555cbebee1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const database = app.firestore();
export default database
