import React from 'react'

const FeatureCard = ({text}) => {
  return (
    <div className='glass-effect2 w-[70%] h-[12%] rounded-lg flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-white'>
      <p className='text-semibol text-4xl'>{text}</p>
    </div>
  )
}

export default FeatureCard
