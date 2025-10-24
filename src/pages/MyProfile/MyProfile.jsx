import React, { useContext, useState } from 'react'
import Container from '../../components/Container/Container'
import { AuthContex } from '../../contex/AuthContex/AuthContex'
import toast from 'react-hot-toast'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const MyProfile = () => {
  const { user, updateUser, loading, setLoading } = useContext(AuthContex);
  const [edit, setEdit] = useState(false);
  const { displayName, email, photoURL } = user || {};
  const handleUpdateInfo = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const strictRegex = /^https?:\/\/(?:www\.)?[a-zA-Z0-9\-_]+(?:\.[a-zA-Z0-9\-_]+)*\.[a-zA-Z]{2,24}(?::\d{1,5})?(?:\/[^\s]*)?$/;
    if (!strictRegex.test(photo)) {
      toast.error('Invalid URL! Please enter a valid photo url')
      return
    }
    updateUser({
      displayName: name,
      photoURL: photo
    })
      .then(() => {
        toast.success('Profile update successfully')
        setEdit(false)
        setLoading(false)
      })
      .catch(error => ErrorMessage(error))
  }
  return (
    <>
      <title>My Profile - WarmPaws</title>
      <div className="my-10 md:my-20">
        <Container>
          {
            user &&
            <div className="max-w-lg w-full mx-auto border border-gray-300 md:p-10 p-5 bg-gray-100 duration-300 hover:shadow-xl hover:shadow-gray-300">
              <div className="text-center space-y-1">
                <img className='w-20 h-20 md:w-30 md:h-30 object-cover rounded-full mx-auto border border-gray-300' src={photoURL} alt={displayName} />
                <h4 className='text-2xl font-medium'>{displayName}</h4>
                <p>{email}</p>
                {!edit && <button onClick={() => setEdit(true)} className='bg-orange-500 w-full py-2 text-gray-100 block cursor-pointer duration-300 transition-all ease-in-out hover:bg-orange-400 my-2'>Edit Profile</button>}
              </div>
              {
                edit
                &&
                <form onSubmit={handleUpdateInfo} className='w-full text-left space-y-2'>
                  <div className="">
                    <label className='block'>Name</label>
                    <input defaultValue={displayName} required name='name' className='bg-white w-full border border-gray-300 px-5 py-2 outline-0' type="text" placeholder='Enter your name' />
                  </div>
                  <div className="">
                    <label className='block'>Photo URL</label>
                    <input defaultValue={photoURL} required name='photo' className='bg-white w-full border border-gray-300 px-5 py-2 outline-0' type="text" placeholder='Enter your photo URL' />
                  </div>
                  <button className='bg-orange-500 w-full py-2 text-gray-100 block cursor-pointer duration-300 transition-all ease-in-out hover:bg-orange-400'>Update Profile</button>
                </form>
              }
            </div>
          }
        </Container>
      </div>
    </>
  )
}

export default MyProfile