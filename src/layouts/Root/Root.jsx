import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-ubuntu text-gray-900">
        <Header />
        <main className='flex-1'>
          <Outlet />
        </main>
        <Footer />
        <Toaster/>
      </div>
    </>
  )
}

export default Root