import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import { useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos';

const FifthSection = () => {
    let iconStyles = { color: "blue", fontSize: '2.3rem' };
    let iconStyles2 = { color: "white", fontSize: '2.3rem' };

    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

    
  return (


    <div className=' h-[80vh] flex flex-col items-center bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20% gap-[1em] mt-[5em]'>
       
       <div className='text-white text-[5rem] font-semibold mt-[1em]'>
        Get Started in as little as 45 days
       </div>

       <div className='text-white text-[2.6rem] mt-[0.8em]'>
        <p>Fast onboarding and a broad range of integrations make Paylt an easy choice for</p>
        <p>most government offices. Get a demo to find out if Paylt is right for your community</p>
       </div>

       {/* <div className=' text-[2.2rem]  text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10% flex flex-col mt-[2em] gap-[1em]'>

        <div className='flex flex-row gap-[2em] '>
           <div className='flex flex-row  gap-[0.4em]'>
           <AiFillCheckCircle style={iconStyles}/>
            <p>No hidden costs or implementation fees</p>
           </div>
           <div className='flex flex-row gap-[0.4em]'>
           <AiFillCheckCircle style={iconStyles}/>
           <p>Designed for resident adoption</p>
           </div>
        </div>

        <div className='flex flex-row gap-[8.5em]'>

        <div className='flex flex-row gap-[0.4em]'>
            <AiFillCheckCircle style={iconStyles}/>
            <p>Integrations done for you</p>
        </div>
        <div className='flex flex-row gap-[0.4em]'>
        <AiFillCheckCircle style={iconStyles}/>
            <p>Secure , PCI complaint & FedRAMP authorized</p>
        </div>
            
        </div>

       </div> */}


       {/*  */}

       <div data-aos="zoom-in" className='  text-[2.2rem] text-primary-blue font-semibold bg-white flex flex-col mt-[2em] gap-[1em] p-[1.2em] rounded-3xl'>

<div className='flex flex-row gap-[2em] '>
   <div className='flex flex-row  gap-[0.4em] items-center justify-center'>
   <AiFillCheckCircle style={iconStyles}/>
    <p>No hidden costs or implementation fees</p>
   </div>
   <div className='flex flex-row gap-[0.4em] items-center justify-center'>
   <AiFillCheckCircle style={iconStyles}/>
   <p>Designed for resident adoption</p>
   </div>
</div>

<div className='flex flex-row gap-[8.5em]'>

<div className='flex flex-row gap-[0.4em] items-center justify-center'>
    <AiFillCheckCircle style={iconStyles}/>
    <p>Integrations done for you</p>
</div>
<div className='flex flex-row gap-[0.4em] items-center justify-center'>
<AiFillCheckCircle style={iconStyles}/>
    <p>Secure , PCI complaint & FedRAMP authorized</p>
</div>
    
</div>

</div>


{/*  */}
       <div className='flex flex-row  justify-center items-center gap-[10em] mt-[4em] '>
       <div  className=" flex flex-row text-[2.1em] text-white bg-primary-blue w-[8em] h-[2em] rounded-lg justify-center item-center p-3">
            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
               <p>Get started</p>
               <BsArrowRight style={iconStyles2}/>
            </button>
          </div>

          <div  className=" flex flex-row text-[2.1em] text-white bg-primary-blue w-[10em] h-[2em] rounded-lg justify-center item-center p-3">
            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
               <p>see how it works</p>
               <BsArrowRight style={iconStyles2}/>
            </button>
          </div>

       </div>


    </div>
  )
}

export default FifthSection
