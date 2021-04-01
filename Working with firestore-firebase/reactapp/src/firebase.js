import firebase from "firebase"
var firebaseConfig = {
  apiKey: "AIzaSyDoPPS5kmgr3V1VZr2yC1oCXr102OCbrwM",
  authDomain: "praxis-works-279805.firebaseapp.com",
  projectId: "praxis-works-279805",
  storageBucket: "praxis-works-279805.appspot.com",
  messagingSenderId: "637405189178",
  appId: "1:637405189178:web:a1bf608c461b0176cb1103",
  measurementId: "G-3EKJKK778H",
};

// Initialize Firebase

export default firebase.initializeApp(firebaseConfig).firestore();
