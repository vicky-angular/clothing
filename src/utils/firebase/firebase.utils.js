import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore,  //instance for firebase
   doc,
    getDoc, 
    setDoc
  } from 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcwuw965dOLjMtTV6D0zP_44heHi07wRk",
    authDomain: "cloth-app-db-27af9.firebaseapp.com",
    projectId: "cloth-app-db-27af9",
    storageBucket: "cloth-app-db-27af9.appspot.com",
    messagingSenderId: "432586161237",
    appId: "1:432586161237:web:0e4f498ba0028391b168dc"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider(); //specify to google interface
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
  export const db = getFirestore(); // database access
  export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
// stor in firebase the auth we get as response 
   const userDocRef = doc(db, 'users', userAuth.uid) //insta of doc modal
   console.log('object', userDocRef)
   const userSnapShot = await getDoc(userDocRef);
   console.log('data info--',userSnapShot, userSnapShot.exists() )
   if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
     await setDoc(userDocRef, {  // this will set data in database
      displayName,
      email,
      createdAt,
      ...additionalInformation
     });
    } catch(error) {
  console.log('ERROR CREATING THE USER-->', error.message);
    }
   }
   return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password)
  }