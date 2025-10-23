import WinterCareServices from '../../components/WinterCareServices/WinterCareServices'
import Hero from '../../components/Hero/Hero'
import MeetOurExpert from '../../components/MeetOurExpert/MeetOurExpert'
import PetCaresWinter from '../../components/PetCaresWinter/PetCaresWinter'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery'

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <WinterCareServices />
        <PetCaresWinter/>
        <MeetOurExpert/>
        <PhotoGallery/>
      </div>
    </>
  )
}

export default Home