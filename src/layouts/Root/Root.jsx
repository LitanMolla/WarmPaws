import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from '../../components/Loader/Loader'

const Root = () => {
  const navigation = useNavigation()
  const loading = Boolean(navigation.location)
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  return (
    <>
      <div className="flex flex-col min-h-screen font-ubuntu text-gray-900">
        <Header />
        <main className='flex-1'>
          {loading ? <Loader /> : <Outlet />}
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  )
}

export default Root