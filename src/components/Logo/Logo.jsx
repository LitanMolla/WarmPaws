import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <>
        <Link to='/'>
            <h4 className='text-[27px] font-medium'>Warm<span className='text-orange-500'>Paws</span></h4>
        </Link>
    </>
  )
}

export default Logo