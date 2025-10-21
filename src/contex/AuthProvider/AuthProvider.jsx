import React from 'react'
import AuthContex from '../AuthContex/AuthContex'

const AuthProvider = ({ children }) => {
    return (
        <AuthContex.Provider>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthProvider