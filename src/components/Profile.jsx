import React, { useState } from 'react';
import Login from './Login';


const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='h-12 bg-secondary rounded-full p-2 cursor-pointer' onClick={() => setOpen(true)}>
        <img src='/icons/user.png' className='h-full' />
      </div>
      <Login open={open} setOpen={setOpen}/>
    </>
  )
}

export default Profile