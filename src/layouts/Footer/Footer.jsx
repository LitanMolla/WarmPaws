import React from 'react'
import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-100'>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            <div className="space-y-5">
              <Logo />
              <p>WarmPaws is a caring platform dedicated to keeping pets safe, warm, and happy during the winter season. Cold weather can be tough on our furry friends, and they deserve extra love and protection when temperatures drop.</p>
              <div className="flex gap-2">
                <Link className='h-10 w-10 bg-orange-500 rounded-sm flex justify-center items-center text-gray-100 border border-orange-500 duration-300 hover:bg-gray-100 hover:text-orange-500'><FaFacebook /></Link>
                <Link className='h-10 w-10 bg-orange-500 rounded-sm flex justify-center items-center text-gray-100 border border-orange-500 duration-300 hover:bg-gray-100 hover:text-orange-500'><FaInstagram /></Link>
                <Link className='h-10 w-10 bg-orange-500 rounded-sm flex justify-center items-center text-gray-100 border border-orange-500 duration-300 hover:bg-gray-100 hover:text-orange-500'><FaLinkedin /></Link>
                <Link className='h-10 w-10 bg-orange-500 rounded-sm flex justify-center items-center text-gray-100 border border-orange-500 duration-300 hover:bg-gray-100 hover:text-orange-500'><FaTwitter /></Link>
              </div>
            </div>
            <div className="space-y-5">
              <h4 className='text-2xl font-semibold'>Contact Info</h4>
              <div className="">
                <p className='flex items-center gap-2'><FaLocationDot className='text-orange-500' /><span>Daniya Bazar Rd, Dhaka 1236</span></p>
                <p className='flex items-center gap-2'><MdCall className='text-orange-500' /><span>+8801741000000</span></p>
                <p className='flex items-center gap-2'><IoMdMail className='text-orange-500' /><span>contact@warmpaws.com</span></p>
              </div>
            </div>
            <div className="space-y-5">
              <h4 className='text-2xl font-semibold'>Opening Hours</h4>
              <div className="max-w-70">
                <p className='flex justify-between'><span>Monday</span> <span>6.00 AM - 10.00 PM</span></p>
                <p className='flex justify-between'><span>Tuesday</span> <span>6.00 AM - 10.00 PM</span></p>
                <p className='flex justify-between'><span>Wednesday</span> <span>6.00 AM - 10.00 PM</span></p>
                <p className='flex justify-between'><span>Thursday</span> <span>6.00 AM - 10.00 PM</span></p>
                <p className='flex justify-between'><span>Friday</span> <span>04.00 PM - 10.00 PM</span></p>
                <p className='flex justify-between'><span>Saturday</span> <span>6.00 AM - 10.00 PM</span></p>
                <p className='flex justify-between'><span>Sunday</span> <span>6.00 AM - 10.00 PM</span></p>
              </div>
            </div>
          </div>
          <hr className='border-gray-300' />
          <p className='text-center py-5'>Copyright © 2025. All right reserved by <Link to='/' className='duration-300 hover:text-orange-500'>WarmPaws</Link> | <Link to='/privacy-policy' className='duration-300 hover:text-orange-500'>Privacy Policy</Link></p>
        </Container>
      </footer>
    </>
  )
}

export default Footer