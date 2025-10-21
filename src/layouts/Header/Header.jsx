import React from 'react'
import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'

const Header = () => {
  return (
    <>
        <header className='py-3'>
            <Container>
                <nav className="flex justify-between items-center">
                    <Logo/>
                </nav>
            </Container>
        </header>
    </>
  )
}

export default Header