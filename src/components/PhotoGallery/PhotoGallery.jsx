import React from 'react'
import Container from '../Container/Container'
import gallery_1 from '../../assets/images/gallery_1.jpg'
import gallery_2 from '../../assets/images/gallery_2.jpg'
import gallery_3 from '../../assets/images/gallery_3.jpg'
import gallery_4 from '../../assets/images/gallery_4.jpg'
import gallery_5 from '../../assets/images/gallery_5.jpg'
import gallery_6 from '../../assets/images/gallery_6.jpg'
import gallery_7 from '../../assets/images/gallery_7.jpg'
import gallery_8 from '../../assets/images/gallery_8.jpg'
const PhotoGallery = () => {
    return (
        <>
            <div className="py-10 md:py-20 bg-orange-50">
                <Container>
                    <h4 className='text-3xl font-medium text-center mb-4'>Photo Gallery</h4>
                    <p className='text-center text-gray-600 mb-5 max-w-xl mx-auto'>Campaign photos of different parts of world and our prestigious Caring work</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_1} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_2} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_3} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_4} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_5} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_6} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_7} alt="Photo Gallery" />
                        </div>
                        <div className="duration-300" data-aos="flip-up">
                            <img className='w-full' src={gallery_8} alt="Photo Gallery" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default PhotoGallery