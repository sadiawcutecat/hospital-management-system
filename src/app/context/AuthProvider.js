// // 'use client'
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import React, { createContext, useEffect, useState } from 'react';
// // import { auth } from '../firebase.config';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
  
// const nishat='shakb';
//   const createUser = (email, password) => {
//      createUserWithEmailAndPassword(auth, email, password);
//   }

//   const signIn = (email, password) => {
  
//      signInWithEmailAndPassword(auth, email, password);
//   }

//   const googleSignIn = () => {
//     const googleProvider = new GoogleAuthProvider();
//      signInWithPopup(auth, googleProvider);
//   }

//   const logOut = () => {
//      signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//       setUser(currentUser);
//       console.log('current user', currentUser);
//     });
//     return () => {
//       return unsubscribe();
//     }
//   }, []);
//   const authInfo={
     
//     user,
//     createUser,
//     signIn,
//     logOut,
//     googleSignIn
//   }

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


