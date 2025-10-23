import React, { use } from 'react'
import OurExpertCard from '../OurExpertCard/OurExpertCard';
import Container from '../Container/Container';
const doctorsPromise = fetch('/doctors.json').then(res => res.json())
const MeetOurExpert = () => {
    const data = use(doctorsPromise);
    return (
        <>
            <div className="py-10 md:py-20 bg-gray-100">
                <Container>
                    <h4 className='text-3xl font-medium text-center mb-4'>Meet Our Expert Vets</h4>
                    <p className='text-center text-gray-600 mb-5 max-w-xl mx-auto'>Meet our skilled and caring vets dedicated to keeping your pets healthy and happy.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {data.map(expert => <OurExpertCard key={expert.id} expert={expert} />)}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default MeetOurExpert