import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { AskLogin } from '../layouts';

const Upload = () => {
  const navigate = useNavigate()

  const {isLoggedIn} = useContext(UserContext);

  if (!isLoggedIn) {
    return <></>
  }
  return (
    <div className='h-12 bg-secondary rounded-full p-2 cursor-pointer' onClick={() => {navigate('upload')}}>
        <img src='/icons/upload.png' className='h-full'/>
    </div>
  )
}

export default Upload

