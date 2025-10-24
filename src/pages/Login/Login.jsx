import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../../components/Container/Container'
import { FaEye, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router'
import { IoMdEyeOff } from 'react-icons/io'
import { AuthContex } from '../../contex/AuthContex/AuthContex'
import toast from 'react-hot-toast'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin, setLoading, loading, user , setUser} = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return <Loader />
  }
  useEffect(() => {
    if (user) {
      navigate(location.state || '/');
    }
  }, [location.state, user, navigate])
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then(result => {
        toast.success('Login successful')
        event.target.reset();
        navigate(location.state || '/')
        setLoading(false);
      })
      .catch(error => {
        ErrorMessage(error)
        setLoading(false);
      })
  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        toast.success('Login successful');
        navigate(location.state || '/')
        setLoading(false);
      })
      .catch(error => {
        ErrorMessage(error);
        setLoading(false);
      })
  }
  return (
    <>
      <title>Login - WarmPaws</title>
      <div className="my-20">
        <Container>
          <div className="max-w-lg w-full mx-auto p-5 md:p-10 shadow-xl shadow-gray-300 space-y-5">
            <form onSubmit={handleLogin} className='w-full space-y-5'>
              <h4 className='text-2xl font-medium md:text-3xl text-center'>Login your account</h4>
              <div className="space-y-1">
                <label className='block'>Email</label>
                <input onChange={(event) => setInputEmail(event.target.value)} name='email' type="email" placeholder='Enter your email' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
              </div>
              <div className="space-y-1">
                <label className='block'>Password</label>
                <div className="relative">
                  <input name='password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
                  <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer'>{showPassword ? <IoMdEyeOff /> : <FaEye />}</button>
                </div>
                <Link to='/forgot-password' state={inputEmail} type='button' className='text-orange-500 duration-300 hover:text-orange-600 cursor-pointer'>Forgot your password?</Link>
              </div>
              <input type="submit" value="Login" className='bg-orange-500 w-full text-gray-100 py-2 cursor-pointer border duration-300 hover:bg-gray-100 border-orange-500 hover:text-orange-500 font-medium' />
            </form>
            <button onClick={handleGoogleLogin} className='w-full py-2 border border-orange-500 text-orange-500 font-medium cursor-pointer flex justify-center items-center gap-3 duration-300 hover:bg-orange-500 hover:text-gray-100 bg-gray-100'><FaGoogle /><span>Login with Google</span></button>
            <p>Don't have an account? <Link to='/register' className='text-orange-500'>Register</Link></p>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Login