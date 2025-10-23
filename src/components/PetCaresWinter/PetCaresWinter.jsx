import React, { use } from 'react'
import Container from '../Container/Container'
import PetsWinterCard from '../PetsWinterCard/PetsWinterCard'

const careDataPromise = fetch('/petsCare.json').then(res => res.json())
const PetCaresWinter = () => {
    const data = use(careDataPromise)
    return (
        <>
            <div className="bg-orange-50 py-10 md:py-20" >
                <Container>
                    <h4 className='text-3xl font-medium text-center mb-4'>Winter Care Tips for Pets</h4>
                    <p className='text-center text-gray-600 mb-5 max-w-xl mx-auto'>Keep your pets warm, healthy, and happy this winter with simple care tips for nutrition, grooming, and protection from the cold.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map(post => <PetsWinterCard key={post.id} post={post} />)}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default PetCaresWinter