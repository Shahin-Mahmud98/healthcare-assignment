import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import intializeAuthentication from "../../Firebase/Firebase.init";

intializeAuthentication();



const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [error,setError] = useState('')

    const handleName = e => {
      setName(e.target.value)
  }
  const handleEmail = e => {
      setEmail(e.target.value)
  }
  const handlePass = e => {
      setPass(e.target.value)
  }


  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }
  const signUpp = () => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((result) => {
        const newUser = result.user
        newUser.displayName = name
        setUser(newUser)
    })
    .catch((error) => {
        setError(error.message);
    });
}


  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    handleEmail,
    handleName,
    handlePass,
    signUpp,
    error
  }
}
export default useFirebase;








































// import React from 'react';
// import intializeAuthentication from "../../Firebase/Firebase.init";
// import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
// intializeAuthentication();
// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();


// const useFirebase = () => {
//     const handleGoogleSignIn = () => {
//         signInWithPopup(auth, googleProvider)
//           .then(result => {
//             const user = result.user;
//             console.log(user);
//           })
//       }
//       const handleRegistration = e => {
//         console.log('email,password');
//         e.preventDefault();

//       }

//       const handleEmailChange = e => {
//         console.log(e.target.value);
//       }

//       const handlePasswordChange = e => {
//         console.log(e.target.value);
//       }
//     return {
//         handleGoogleSignIn,handleRegistration,handleEmailChange,handlePasswordChange
//     }
// };

// export default useFirebase;