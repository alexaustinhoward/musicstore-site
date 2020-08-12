import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    
        apiKey: "AIzaSyBg0vLY9z3VuJbVC1MyfKprO-xCPGBDhMA",
        authDomain: "musicstore-15350.firebaseapp.com",
        databaseURL: "https://musicstore-15350.firebaseio.com",
        projectId: "musicstore-15350",
        storageBucket: "musicstore-15350.appspot.com",
        messagingSenderId: "794055640205",
        appId: "1:794055640205:web:68acd6cec70dd199b24ec4"
      };
export const  createUserProfileDocument=async (userAuth, otherdata)=>
{
  if(!userAuth) return;
  const userRef =firestore.doc(`user/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt =new Date();
    try{
      await userRef.set({
        displayName,
        email,createdAt,
        ...otherdata
      })
    } catch(error){
      console.log(error.message);
    }
  }
  return userRef;
}
firebase.initializeApp(config);
 export const auth = firebase.auth();
 export  const firestore= firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt : 'select_account'});
 export const signInWithGoogle =() => auth.signInWithPopup(provider);
 export default firebase;