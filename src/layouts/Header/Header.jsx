import React, { useContext, useState } from 'react'
import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'
import { Link, NavLink } from 'react-router'
import { FaBars } from 'react-icons/fa'
import { AuthContex } from '../../contex/AuthContex/AuthContex'

const Header = () => {
    const { user, logOutUser } = useContext(AuthContex);
    const [open, setOpen] = useState(false);
    const handleLogOut = () => {
        logOutUser()
    }
    const menu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Home</NavLink></li>
        <li><NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Services</NavLink></li>
        <li><NavLink to='/profile' className={({ isActive }) => isActive ? 'text-orange-500' : ''}>My Profile</NavLink></li>
    </>
    return (
        <>
            <header className='py-3 bg-gray-100 sticky top-0 left-0 w-full z-50 shadow'>
                <Container>
                    <nav className="flex justify-between items-center">
                        <Logo />
                        <ul className='hidden md:flex gap-5'>
                            {menu}
                        </ul>
                        <div className="hidden md:flex gap-5 items-center ">
                            <button className='group relative cursor-pointer group'>
                                {user
                                    &&
                                    <>
                                        <img className='w-10 h-10 object-cover rounded-full border border-orange-500' src={user?.photoURL} alt={user?.displayName} />
                                    </>
                                }
                            </button>
                            {user ? <button onClick={handleLogOut} className='bg-orange-500 text-gray-100 px-6 py-2.5 duration-300 hover:bg-gray-900 cursor-pointer'>Logout</button> : <Link to='/login' className='bg-orange-500 text-gray-100 px-6 py-2.5 duration-300 hover:bg-gray-900'>Login</Link>}
                            
                        </div>
                        {/* bar for show mobile menu */}
                        <button onClick={() => setOpen(prv => !prv)} className='md:hidden text-2xl cursor-pointer '><FaBars /></button>
                    </nav>
                    {/* mobile menu */}
                    {open && <>
                        <ul className='text-center space-y-2 mt-2 md:hidden'>
                            {menu}
                        </ul>
                        <div className="md:hidden flex gap-5 items-center justify-center mt-5 ">
                            {user ? <button onClick={handleLogOut} className='bg-orange-500 text-gray-100 px-6 py-2.5 duration-300 hover:bg-gray-900 cursor-pointer'>Logout</button> : <Link to='/login' className='bg-orange-500 text-gray-100 px-6 py-2.5 duration-300 hover:bg-gray-900 block'>Login</Link>}
                            <button className='group relative cursor-pointer group'>
                                {user
                                    &&
                                    <>
                                        <img className='w-10 h-10 object-cover rounded-full border border-orange-500' src={user?.photoURL} alt={user?.displayName} />
                                        <div className="px-5 bg-gray-100 border border-gray-300 py-2 absolute right-0 top-13 hidden group-hover:block z-50 whitespace-nowrap"><p>{user?.displayName}</p></div>
                                    </>

                                }
                            </button>
                        </div>
                    </>

                    }
                </Container>
            </header>
        </>
    )
}

export default Header