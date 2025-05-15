import React from 'react'
import '../App.css'

const Loader = ({ h = '12' }) => {
  return (
    <div className={`flex justify-center items-center h-${h}`}>
      <div className='loader'></div>
    </div>
  )
}

export default Loader