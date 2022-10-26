import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/FireBase.config';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const userProvider = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const newUserSignIn = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email ,password)
    }

    const SignIn = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, userProvider, logOut, newUserSignIn, SignIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;