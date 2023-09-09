import React from 'react'
import FeatureCard from './FeatureCard'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const FourthSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])
  return (
    <div className='w-[100%] flex flex-col gap-[5em] border-t-[0.2em] border-black border-solid pt-[5em]'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <p className='font-semibold text-6xl text-ternary-color'>Discover Our Website's Power-Packed Features</p>
        <div className='flex flex-row w-[100%] justify-center items-center gap-3'>
          <div className='bg-black w-[5%] h-[0.4em]'></div>
          <div className='bg-black w-[0.3%] h-[0.4em]'></div>
        </div>
      </div>
      <div className='h-[100%] flex flex-col gap-[5em]'>
          <div data-aos="fade-right" className='w-[60%] h-[45%]'>
            <FeatureCard isleft={true} index={0}/>
          </div>
          <div data-aos="fade-left"className='w-[60%] h-[45%] flex self-end'>
            <FeatureCard isleft={false} index={1}/>
          </div>
          <div data-aos="fade-right" className='w-[60%] h-[45%]'>
            <FeatureCard isleft={true} index={2}/>
          </div>
          <div data-aos="fade-left"className='w-[60%] h-[45%] flex self-end'>
            <FeatureCard isleft={false} index={1}/>
          </div>
      </div>

    </div>
  )
}

export default FourthSection
