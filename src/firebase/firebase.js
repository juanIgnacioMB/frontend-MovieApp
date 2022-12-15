import  firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAomBwBCrsNs5vxEzakGEXlycqLeZxuEuU",
  authDomain: "movie-app-8f738.firebaseapp.com",
  projectId: "movie-app-8f738",
  storageBucket: "movie-app-8f738.appspot.com",
  messagingSenderId: "172043564541",
  appId: "1:172043564541:web:a12d5c81fe8c70a31bd594"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase