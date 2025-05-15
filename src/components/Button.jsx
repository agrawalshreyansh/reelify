import React from 'react'

const Button = ({text,status,cb}) => {
  return (
    <button className={`text-base ${status ? 'bg-ternary' : 'bg-secondary'} h-12 w-28 rounded-xl hover:bg-ternary cursor-pointer`} onClick={cb}>
        {text}
    </button>
  )
}

export default Button