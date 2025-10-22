import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { AuthContex } from '../AuthContex/AuthContex'
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);
    const authData = {
        createUser,
        loginUser,
        googleLogin,
        user,
        setUser
    }
    return (
        <AuthContex.Provider value={authData}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthProvider