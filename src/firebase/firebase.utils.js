import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
   
  apiKey: "AIzaSyBvesAj6ZJLwewdr1EnPNAJgjRXFV72q2k",
  authDomain: "user-6f362.firebaseapp.com",
  databaseURL: "https://user-6f362.firebaseio.com",
  projectId: "user-6f362",
  storageBucket: "user-6f362.appspot.com",
  messagingSenderId: "637825782249",
  appId: "1:637825782249:web:5bc60c327fdaae454b3b78",
  measurementId: "G-QQWBJF5LE8"

  };

  export const createUserProfileDocument = async(userAuth,additonalData) =>{
    if(!userAuth)return;
   const userRef =firestore.doc(`$user/${userAuth.uid}`);
   const snapshot = await userRef.get();
   if(!snapshot.exists){
     const{displayName,email}=userAuth;
     const createdAt = new Date();
     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additonalData
       })
     }catch(error){
       console.log('error creatting user',error.message);
     }

   }
   return userRef;
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
