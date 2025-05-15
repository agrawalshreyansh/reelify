import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {

  const navigate = useNavigate()

  return (
    <div className='flex justify-center font-extrabold text-xl py-3 px-8 cursor-pointer' onClick={() => navigate('')}>
        Streamr
    </div>
  )
}

export default Logo