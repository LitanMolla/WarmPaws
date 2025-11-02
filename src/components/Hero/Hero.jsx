import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Hero.css'
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import Container from '../Container/Container';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className="hero-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={bg1} alt="Slide 1" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-gray-900/50">
                            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2" >
                                <Container>
                                    <div className="flex justify-center items-center">
                                        <div className="space-y-5 text-gray-100 text-center">
                                            <h2 className='text-3xl md:text-5xl font-semibold'>EASY PETS ADOPTION</h2>
                                            <p className='max-w-xl mx-auto md:text-xl'>We are a group of highly trained, experienced animal lovers who are devoted to giving the best care possible.</p>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={bg2} alt="Slide 1" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-gray-900/50">
                            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2" >
                                <Container>
                                    <div className="flex justify-center items-center">
                                        <div className="space-y-5 text-gray-100 text-center">
                                            <h2 className='text-3xl md:text-5xl font-semibold'>
                                                PET CARE GUIDELINES
                                            </h2>
                                            <p className='max-w-xl mx-auto md:text-xl'>We are a group of highly trained, experienced animal lovers who are devoted to giving the best care possible.</p>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={bg3} alt="Slide 1" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0 bg-gray-900/50">
                            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2" >
                                <Container>
                                    <div className="flex justify-center items-center">
                                        <div className="space-y-5 text-gray-100 text-center">
                                            <h2 className='text-3xl md:text-5xl font-semibold'>THE BEST PET TRAINERS</h2>
                                            <p className='max-w-xl mx-auto md:text-xl'>We are a group of highly trained, experienced animal lovers who are devoted to giving the best care possible.</p>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
