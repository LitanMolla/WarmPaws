import React from 'react'
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import Container from '../../components/Container/Container'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Container>
          <div className="flex-1 flex justify-center items-center">
              <div className="text-center my-20">
                <h1 className="text-6xl font-extrabold text-orange-500 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  Page Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                  Oops! The page you are looking for does not exist.
                </p>
                <Link to='/' className='text-white bg-orange-500 px-5 py-2.5 duration-300 hover:bg-orange-600'>Go Back Home</Link>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default NotFound