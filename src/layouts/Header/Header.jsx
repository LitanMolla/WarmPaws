import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'
import { Link, NavLink } from 'react-router'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    const [open, setOpen] = useState(false)
    const menu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Home</NavLink></li>
        <li><NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Services</NavLink></li>
        <li><NavLink to='/profile' className={({ isActive }) => isActive ? 'text-orange-500' : ''}>My Profile</NavLink></li>
    </>
    return (
        <>
            <header className='py-3 bg-gray-100'>
                <Container>
                    <nav className="flex justify-between items-center">
                        <Logo />
                        <ul className='hidden md:flex gap-5'>
                            {menu}
                        </ul>
                        <div className="hidden md:flex gap-5">
                            <Link className='bg-orange-500 text-gray-100 px-6 py-2.5 duration-300 hover:bg-gray-900'>Login</Link>
                            <button className='bg-orange-500 text-gray-100 px-6 py-2.5 duration-300 hover:bg-gray-900 cursor-pointer'>Logout</button>
                        </div>
                        {/* bar for show mobile menu */}
                        <button onClick={() => setOpen(prv => !prv)} className='md:hidden text-2xl cursor-pointer '><FaBars /></button>
                    </nav>
                    {/* mobile menu */}
                    {open && <ul className='text-center space-y-2 mt-2 md:hidden'>
                        {menu}
                    </ul>}
                </Container>
            </header>
        </>
    )
}

export default Header