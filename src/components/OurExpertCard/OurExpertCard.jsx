import React from 'react'

const OurExpertCard = ({ expert }) => {
    const { specialization, name, image } = expert;
    return (
        <div className='border border-gray-200 text-center border-b-2 border-b-orange-500 duration-300 ' data-aos="zoom-out" >
            <img className='w-full' src={image} alt={name} />
            <div className="p-4">
                <h4 className='text-xl font-medium'>{name}</h4>
                <p>{specialization}</p>
            </div>
        </div>
    )
}

export default OurExpertCard