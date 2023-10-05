import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs' 
import {BsTwitter} from 'react-icons/bs' 
import {BsLinkedin} from 'react-icons/bs' 

const Footer = () => {
  return (
    <div className='w-[100%] h-[60vh] bg-[#161D29]'>
      <div className='w-11/12 h-[100%] mx-auto  flex flex-col  justify-center items-center'>

        <div className='w-[100%] h-[60%]  flex flex-row justify-between  mt-[8em] '>

            <div className=' flex flex-col gap-4 '>
              
                <div className='text-4xl font-bold text-primary-blue mb-6'>For Business</div>

                <div className='nav-link-translate text-2xl font-medium text-white ' >
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt; Senior Citizens</NavLink>
                </div>
                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt;  Students</NavLink>
                </div>
                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt;  Insurances Companies</NavLink>
                </div>
                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt;  Marts</NavLink>
                </div>
                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt;  Business owners</NavLink>
                </div>
                

            </div>

            <div className='flex flex-col gap-4'>

                <div className='text-4xl font-bold text-primary-blue mb-6'>Resources</div>

                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt;  Resources Center</NavLink>
                </div>
                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" >&gt;  Testimonials</NavLink>
                </div>

            </div>


            <div className='flex flex-col gap-4'>
                <div className='text-4xl font-bold text-primary-blue mb-6'>Partners</div>

                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="https://studynotion.tech/" >&gt; Study Notion</NavLink>
                </div>
                <div className='nav-link-translate  text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="https://codevita.live/" >&gt; Code Vita</NavLink>
                </div>

            </div>

            <div className='flex flex-col gap-4'> 
                <div className='text-4xl font-bold text-primary-blue mb-6'>Company</div>

                <div className='nav-link-translate text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > &gt; About</NavLink>
                </div>
                <div className='nav-link-translate text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > &gt; Career</NavLink>
                </div>
                <div className='nav-link-translate text-2xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > &gt; Contact</NavLink>
                </div>

            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-4xl font-bold text-primary-blue mb-6'>Connect Us</div>
         <div className='flex flex-row gap-2 justify-between'>
                <div className='nav-link-footer text-3xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > <BsFacebook/> </NavLink>
                </div>
                <div className='nav-link-footer text-3xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > <BsInstagram/> </NavLink>
                </div>
                <div className='nav-link-footer text-3xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > <BsTwitter/> </NavLink>
                </div>
                <div className='nav-link-footer text-3xl font-medium text-white '>
                    <NavLink  style={{ textDecoration: 'none' }} to="" > <BsLinkedin/> </NavLink>
                </div>

             </div>

            </div>

        </div>
        <div className='w-[100%] h-[100%] mt-[6em] '>

        <div className='w-[100%] h-[2%] rounded-full  bg-primary-blue mt-8'></div>

      <div className='w-[100%] h-[25n%]  flex flex-row justify-between items-start pt-5 mt-2'>
        
        <div className=' flex flex-row gap-10  '>
            <div className='nav-link-footer text-xl font-medium text-white '>
                        <NavLink  style={{ textDecoration: 'none' }} to="" >Privacy Policy</NavLink>
                
                       
            </div>
            <div className='nav-link-footer text-xl font-medium text-white '>
                        <NavLink  style={{ textDecoration: 'none' }} to="" >Cookies Policy</NavLink>
                        {/* <div className='w-[1.6px] h-[90%] rounded-full  bg-black'></div> */}
                       
            </div>
            <div className='nav-link-footer text-xl font-medium text-white '>
                        <NavLink  style={{ textDecoration: 'none' }} to="" >Terms</NavLink>
                        {/* <div className='w-[1.5px] h-[90%] rounded-full  bg-black'></div> */}
                       
            </div>
        </div>

        <div className='text-xl font-medium text-white'>
           <p>Made By ©TectTitans 2023 WealthFox</p>
        </div>

      </div>
      </div>
     

      </div>
    </div>
  )
}

export default Footer
