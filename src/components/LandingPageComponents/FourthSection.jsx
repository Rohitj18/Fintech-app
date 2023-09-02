import React from 'react'
import FeatureCard from './FeatureCard'
import featurephone from '../../assets/LandingPageAssests/iphone.jpg'

const FourthSection = () => {
  return (
    <div className='w-[100%] h-[70vh] '>
      <div className='mx-auto flex flex-row h-[100%]'>
        {/* left section */}
        <div className='flex flex-col gap-[4rem] h-[100%] w-[50%] max-w-[50%] bg-primary-blue justify-center items-center'>
            
            <h2 className='text-5xl text-white font-bold'>Our Features</h2>   
            <FeatureCard text={"Stock Analysis"}/>
            <FeatureCard text={"Expense Management"}/>
            <FeatureCard text={"Personalized Wallet"}/>
            <FeatureCard text={"Porfolio Managment"}/>
        </div>
        {/* right section */}
        <div className='flex gap-4 w-[50%] max-w-[50%] justify-center items-center'>
            <div className='h-[100%] w-[80%]'>
                <img src={featurephone} alt="" className='w-[100%] h-[100%]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FourthSection
