import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Button = ({text,size}) => {
    let iconStyles = { color: "white", fontSize: `${size}rem` };
  return (
    <button className='flex flex-row justify-center items-center gap-3 bg-primary-blue w-[100%] h-[100%] rounded-lg'>
      <p className={`text-[2em] text-white`}>{text}</p>
      <BsArrowRight style={iconStyles}/>
    </button>
  )
}

export default Button
