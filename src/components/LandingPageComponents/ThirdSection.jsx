import React from "react";
import { BsArrowRight } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react'
import { RiGovernmentFill } from 'react-icons/ri'
import aadharimg from '../../assets/LandingPageAssests/addhar__1_-removebg-preview (1).png'



const ThirdSection = () => {
  let iconStyles = { color: "white", fontSize: '2.3rem' };
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
  return (
    <div className="h-[83vh] w-[100%] pt-[3rem] ">
      <div className="w-11/12 h-[100%] mx-auto flex flex-col  items-center gap-10">

        <div className="flex flex-row text-[4em] font-semibold gap-4">
          <p>Save <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10%'>money.</span></p>
          <p>Save <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10%'>time.</span></p>
        </div>


        <div className="text-subheading-color text-[2em]">
          <p>India's largest tax and and financial services software platform</p>
        </div>

        <div className="flex flex-row gap-10">

          <div className=" flex flex-row text-[2em] text-white bg-primary-blue w-[8em] h-[2em] rounded-lg justify-center item-center p-3">
            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
              <p>Get started</p>
              <BsArrowRight style={iconStyles} />
            </button>
          </div>

          <div className=" flex flex-row text-[2em] text-primary-blue bg-white w-[10em] h-[2em] rounded-lg font-semibold border-2 border-blue-700 p-3">
            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
              <p>Request a demo</p>
            </button>
          </div>

        </div>

        <div className="flex flex-row justify-center items-center gap-14 mt-[2em]">
          {/* Addhar card */}
          <div data-aos="flip-left" className="flex flex-col px-[3em]  gap-8 w-[35em] justify-center items-center h-[34em] box-shadow rounded-lg">
            <div className="h-[32%] w-[60%]">
              <img src={aadharimg} alt="" className="h-[100%] w-[100%]" />
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <RiGovernmentFill size={21}/>
              <p className="text-4xl font-semibold">Aadhaar Card</p>

            </div>

            <p className="text-center text-2xl">Unlock seamless financial access with Aadhaar - India's universal biometric identity, powering secure and convenient transactions on our fintech platform.</p>
            <div className='nav-link text-3xl font-bold text-primary-blue'>
              <NavLink data-id="1" style={{ textDecoration: 'none' }} to="https://services.india.gov.in/service/detail/apply-online-for-aadhaar-card-data-updatecorrection" >Fill Form</NavLink>
            </div>

          </div>

          {/* pan card */}

          <div data-aos="flip-left" className="flex flex-col px-[3em]  gap-8 w-[35em] justify-center items-center h-[34em] box-shadow rounded-lg">
            <div className="h-[32%] w-[60%]">
              <img src={aadharimg} alt="" className="h-[100%] w-[100%]" />
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <RiGovernmentFill size={21}/>
              <p className="text-4xl font-semibold">Pan Card</p>

            </div>

            <p className="text-center text-2xl">Elevate your financial journey with PAN card - Your key to legitimate and hassle-free financial transactions, now available through our fintech services.</p>
            <div className='nav-link text-3xl font-bold text-primary-blue'>
              <NavLink data-id="1" style={{ textDecoration: 'none' }} to="https://www.protean-tinpan.com/services/pan/instructions49A.html" >Fill Form</NavLink>
            </div>

          </div>

          <div data-aos="flip-left" className="flex flex-col px-[3em]  gap-8 w-[35em] justify-center items-center h-[34em] box-shadow rounded-lg">
            <div className="h-[32%] w-[60%]">
              <img src={aadharimg} alt="" className="h-[100%] w-[100%]" />
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <RiGovernmentFill size={21}/>
              <p className="text-4xl font-semibold">Income Tax Returns</p>

            </div>

            <p className="text-center text-2xl">Take control of your financial future with hassle-free income tax returns - file, track, and secure your financial well-being with our user-friendly platform.</p>
            <div className='nav-link text-3xl font-bold text-primary-blue'>
              <NavLink data-id="1" style={{ textDecoration: 'none' }} to="https://www.protean-tinpan.com/services/pan/instructions49A.html" >Fill Form</NavLink>
            </div>

          </div>
           
        </div>


      </div>
    </div>
  );
};

export default ThirdSection;
