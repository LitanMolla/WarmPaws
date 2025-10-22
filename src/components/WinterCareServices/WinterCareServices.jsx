import React from 'react'
import Container from '../Container/Container'
import { useLoaderData } from 'react-router'
import WinterCareCard from '../WinterCareCard/WinterCareCard';

const WinterCareServices = () => {
    const data = useLoaderData();
    
  return (
    <>
        <div className="bg-gray-100 py-10">
            <Container>
                <h4 className='text-3xl font-medium text-center mb-4'>Popular Winter Care Services</h4>
                <p className='text-center text-gray-600 mb-5'>Ensure your pets stay warm, healthy, and comfortable throughout the chilly winter months with our range of specialized winter care services designed to meet all their needs</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map(service=><WinterCareCard key={service.serviceId} service={service}/>)}
                </div>
            </Container>
        </div>
    </>
  )
}

export default WinterCareServices