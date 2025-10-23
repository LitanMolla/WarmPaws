import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import Container from '../../components/Container/Container';
import { FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const service = data.find(item => item.serviceId == id);
  const { serviceId, serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = service;
  const handleBooking = (event) => {
    event.preventDefault()
    event.target.reset()
    toast.success(`${serviceName} Booking successful!`)
  }
  return (
    <>
      <div className="my-10 md:my-20">
        <Container>
          <div className="flex gap-10 items-center bg-gray-100 flex-col md:flex-row">
            <div className="md:w-1/2">
              <img className='w-full' src={image} alt={serviceName} />
            </div>
            <div className="md:w-1/2 space-y-2 md:pr-10">
              <h4 className='text-2xl md:text-3xl font-medium'>Service: {serviceName}</h4>
              <p><b>Provider:</b> {providerName}</p>
              <p><b>Provider Email:</b> {providerEmail}</p>
              <p><b>Price:</b> ${price}</p>
              <p><b>Available:</b> {slotsAvailable}</p>
              <p><b>Category:</b> {category}</p>
              <div className='flex gap-2'><b>Rating:</b> <p className='flex items-center gap-2 text-yellow-500'><FaStar /><span>{rating}</span></p></div>
              <p><b>Description:</b> {description}</p>
              <form onSubmit={handleBooking} className='w-full space-y-3'>
                <div className="">
                  <label className='block'>Name</label>
                  <input required type="text" placeholder='Enter your name' className='bg-white w-full px-5 py-2 border border-gray-200 outline-0' />
                </div>
                <div className="">
                  <label className='block'>Email</label>
                  <input required type="email" placeholder='Enter your Email' className='bg-white w-full px-5 py-2 border border-gray-200 outline-0' />
                </div>
                <input type="submit" value="Book Now" className='bg-orange-500 duration-300 hover:bg-orange-600 py-2 block w-full cursor-pointer text-gray-100' />
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ServiceDetails