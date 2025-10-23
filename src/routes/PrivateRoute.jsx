import React, { useContext } from 'react'
import { AuthContex } from '../contex/AuthContex/AuthContex'
import { Navigate, useLocation } from 'react-router'
import Loader from '../components/Loader/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();
  if (loading) {
    return <Loader/>
  } else if (user) {
    return children
  } else {
    return <Navigate state={location.pathname} to='/login' />
  }
}

export default PrivateRoute