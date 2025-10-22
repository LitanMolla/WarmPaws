import React from 'react'
import Container from '../../components/Container/Container'
import WinterCareServices from '../../components/WinterCareServices/WinterCareServices'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <WinterCareServices />
      </div>
    </>
  )
}

export default Home