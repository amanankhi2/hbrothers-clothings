import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// initialise the App
const config = {
    apiKey: "AIzaSyCFpSAIPFWSCzJXX672sRJ_UkL_Hy6iHuw",
    authDomain: "hbrothers-clothings.firebaseapp.com",
    databaseURL: "https://hbrothers-clothings.firebaseio.com",
    projectId: "hbrothers-clothings",
    storageBucket: "",
    messagingSenderId: "525124970352",
    appId: "1:525124970352:web:39efbc31a8b879a5"
  };


  // Creation of New User 

export const createUserProfileDocument = async(userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })     
    }
    catch(err){
      console.log("Error Creating User ",err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in Service Provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

// How user will sign in 
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


// In case we want the whole library

export default firebase;