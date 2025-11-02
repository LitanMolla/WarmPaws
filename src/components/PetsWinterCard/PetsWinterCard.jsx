import React from 'react'

const PetsWinterCard = ({post}) => {
    const { image, title, description } = post;
    return (
        <div className='bg-white border border-gray-200 duration-300 ' data-aos="zoom-in-up">
            <img className='w-full h-60 object-cover' src={image} alt={title} />
            <div className="p-4">
                <h4 className='text-xl font-medium line-clamp-1'>{title}</h4>
                <p className='line-clamp-5'>{description}</p>
            </div>
        </div>
    )
}

export default PetsWinterCard