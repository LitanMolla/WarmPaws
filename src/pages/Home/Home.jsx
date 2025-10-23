import WinterCareServices from '../../components/WinterCareServices/WinterCareServices'
import Hero from '../../components/Hero/Hero'
import MeetOurExpert from '../../components/MeetOurExpert/MeetOurExpert'
import PetCaresWinter from '../../components/PetCaresWinter/PetCaresWinter'

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <WinterCareServices />
        <PetCaresWinter/>
        <MeetOurExpert/>
      </div>
    </>
  )
}

export default Home