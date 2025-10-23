import React from 'react'
import Container from '../../components/Container/Container'
import WinterCareServices from '../../components/WinterCareServices/WinterCareServices'
import Hero from '../../components/Hero/Hero'
import WinterCareHead from '../../components/WinterCareHead/WinterCareHead'

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <WinterCareServices />
        <WinterCareHead/>
      </div>
    </>
  )
}

export default Home