import React from "react";
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react'
import handMobile from '../../assets/LandingPageAssests/handMobile.jpg'
import {BsArrowRight} from 'react-icons/bs'

const SecondSection = () => {
  let iconStyles = { color: "#2d5eff", fontSize: '2.3rem' };

    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
  return (
    <div className="h-[65vh] w-[100%] ">
      <div className="flex flex-row flex-wrap h-[100%] w-[100%]">
        {/* left section*/}
        <div className="h-[100%] w-[50%] max-w-[50%] flex flex-col justify-center items-start ">

          <div  data-aos="fade-right" className="h-[100%] w-[100%] pt-4">
            <img className="w-[100%] h-[100%]" src={handMobile} alt="" />
          </div>

        </div>

        {/* right section*/}
        <div  className="h-[100%] w-[50%] max-w-[50%] flex flex-col justify-center items-start bg-primary-blue pl-[6rem] gap-10">


   <div data-aos="fade-left" className="flex flex-col justify-center items-start bg-primary-blue pl-[6rem] gap-10">
          <div   className="text-white text-[4em]  ">
          Expert Solutions for Innovative Financial Services
          </div>

          <div  className="text-white text-[2em]">
            We're revolutionizing the way you manage your finances, offering
            innovative solutions for banking, saving, and investing. Our team of
            experts is always at your service, ready to provide insightful
            answers to any of your queries, no matter how unconventional they
            may be.
          </div>

         


          <div  className=" flex flex-row text-[2em] text-primary-blue bg-white w-[10em] h-[2em] rounded-lg font-semibold ">
            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
               <p>Know More</p>
               <BsArrowRight style={iconStyles}/>
            </button>
          </div>

          </div>
         
        
        </div>


      </div>
    </div>
  );
};

export default SecondSection;
