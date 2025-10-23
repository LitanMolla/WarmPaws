import React, { useContext, useState } from 'react'
import Container from '../../components/Container/Container'
import { useLocation } from 'react-router'
import { AuthContex } from '../../contex/AuthContex/AuthContex'

const ForgotPassword = () => {
    const { forgotPassword } = useContext(AuthContex);
    const location = useLocation();
    const [userEmail, setUserEmail] = useState(location.state);
    const handleReset = (event) => {
        event.preventDefault();
        forgotPassword(userEmail)
        window.open("https://mail.google.com/mail/u/0/", "_blank");
    }
    return (
        <>
            <div className="my-20">
                <Container>
                    <div className="max-w-lg w-full mx-auto p-5 md:p-10 shadow-xl shadow-gray-300 space-y-5">
                        <form onSubmit={handleReset} className='w-full space-y-5'>
                            <h4 className='text-2xl font-medium md:text-3xl text-center'>Reset your password</h4>
                            <div className="space-y-1">
                                <label className='block'>Email</label>
                                <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} name='email' type="email" placeholder='Enter your email' className='bg-gray-100 w-full px-5 py-2 border border-gray-300 outline-0' />
                            </div>

                            <input type="submit" value="Reset" className='bg-orange-500 w-full text-gray-100 py-2 cursor-pointer border duration-300 hover:bg-gray-100 border-orange-500 hover:text-orange-500 font-medium' />
                        </form>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ForgotPassword