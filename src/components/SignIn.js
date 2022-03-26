import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';

const SignIn = () => {


    const signInWithGoogle = () => {
         const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
            console.log(user);
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          alert(errorMessage)
        //   const email = error.email;
          // The AuthCredential type that was used.
        //  s
        
        });
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default SignIn