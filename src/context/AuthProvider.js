import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/FireBase.config';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const userProvider = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const newUserSignIn = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email ,password)
    }

    const SignIn = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,loading, userProvider, logOut, newUserSignIn, SignIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;