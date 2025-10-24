import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { FaEye, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { IoMdEyeOff } from 'react-icons/io'
import { AuthContex } from '../../contex/AuthContex/AuthContex'
import toast from 'react-hot-toast'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false)
  const { createUser, googleLogin, loading, setLoading, updateUser, user, setUser } = useContext(AuthContex);
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  if (loading) {
    return <Loader />
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setError(false)
    if (!passwordRegex.test(password)) {
      setError(true)
      return
    }
    setLoading(true)
    createUser(email, password)
      .then(result => {
        toast.success('Register successfully')
        updateUser({
          displayName: name,
          photoURL: photo
        })
        setUser({ ...result.user, displayName: name, photoURL: photo })
        navigate('/')
        setLoading(false);
      })
      .catch(error => {
        ErrorMessage(error)
        setLoading(false);
      })
    event.target.reset();
  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        toast.success('Login successful');
        setLoading(false)
        navigate('/')
      })
      .catch(error => {
        ErrorMessage(error);
        setLoading(false);
      })
  }
  return (
    <>
      <title>Register - WarmPaws</title>
      <div className="my-20">
        <Container>
          <div className="max-w-lg w-full mx-auto p-5 md:p-10 shadow-xl shadow-gray-300 space-y-5">
            <form onSubmit={handleRegister} className='w-full space-y-5'>
              <h4 className='text-2xl font-medium md:text-3xl text-center'>Register your account</h4>
              <div className="space-y-1">
                <label className='block'>Name</label>
                <input name='name' type="text" placeholder='Enter your name' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
              </div>
              <div className="space-y-1">
                <label className='block'>Photo URl</label>
                <input name='photo' type="text" placeholder='Enter your photo URL' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
              </div>
              <div className="space-y-1">
                <label className='block'>Email</label>
                <input name='email' type="email" placeholder='Enter your email' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
              </div>
              <div className="space-y-1">
                <label className='block'>Password</label>
                <div className="relative">
                  <input name='password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
                  <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer'>{showPassword ? <IoMdEyeOff /> : <FaEye />}</button>
                </div>
              </div>
              {error && <p className='text-red-500'>Password must be at least 6 characters long and include 1 uppercase letter, 1 lowercase letter, and 1 number.</p>}
              <input type="submit" value="Register" className='bg-orange-500 w-full text-gray-100 py-2 cursor-pointer border duration-300 hover:bg-gray-100 border-orange-500 hover:text-orange-500 font-medium' />
            </form>
            <button onClick={handleGoogleLogin} className='w-full py-2 border border-orange-500 text-orange-500 font-medium cursor-pointer flex justify-center items-center gap-3 duration-300 hover:bg-orange-500 hover:text-gray-100 bg-gray-100'><FaGoogle /><span>Login with Google</span></button>
            <p>Already have an account? <Link to='/login' className='text-orange-500'>Login</Link></p>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Register