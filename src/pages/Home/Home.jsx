import React from 'react'
import Container from '../../components/Container/Container'
import WinterCareServices from '../../components/WinterCareServices/WinterCareServices'
import Hero from '../../components/Hero/Hero'
import WinterCare from '../../components/WinterCare/WinterCare'

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <WinterCareServices />
        <WinterCare/>
      </div>
    </>
  )
}

export default Home