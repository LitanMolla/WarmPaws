import React from 'react'
import Container from '../../components/Container/Container'
import WinterCareCard from '../../components/WinterCareCard/WinterCareCard'
import { useLoaderData } from 'react-router';

const Services = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="my-10 md:my-20">
        <Container>
          <h4 className='text-3xl font-medium text-center mb-4'>Our Winter Care Services</h4>
          <p className='text-center text-gray-600 mb-5 max-w-xl mx-auto'>Ensure your pets stay warm, healthy, and comfortable throughout the chilly winter months with our range of specialized winter care services designed to meet all their needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map(service => <WinterCareCard key={service.serviceId} service={service} />)}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Services