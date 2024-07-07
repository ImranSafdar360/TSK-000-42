// UserAuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signup(email, password) { // Changed to signup
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email) {
    return firebaseSendPasswordResetEmail(auth, email);
  }

  function logOut(){
    return signOut(auth);
  }

  function signinWithGoogle(){
    const googleAuthProvider = new GoogleAuthProvider
    return signInWithPopup(auth, googleAuthProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signup, login, resetPassword, logOut, signinWithGoogle}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
