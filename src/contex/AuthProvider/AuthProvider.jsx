import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { AuthContex } from '../AuthContex/AuthContex'
import toast from 'react-hot-toast'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOutUser = async () => {
        return signOut(auth).then(() => {
            toast('Logout successful')
        })
    }
    const forgotPassword = async (email) => {
        return sendPasswordResetEmail(auth, email).then(() => {
            toast.success('Password reset email sent!')
        }).catch(error => {
            ErrorMessage(error)
        })
    }
    const updateUser = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
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
        setUser,
        loading,
        setLoading,
        logOutUser,
        forgotPassword,
        updateUser
    }
    return (
        <AuthContex.Provider value={authData}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthProvider