import React from 'react'
import { NavLink } from 'react-router-dom'

// h-[100vh] w-[100%] bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20%

const Navbar = () => {
    //border-4 border-indigo-500/100
  return (
    <div className='fixed w-[100%]'>
    <div className='w-[100%] h-[2.7em] bg-primary-blue'></div>
    <div className='p-[1.5rem] bg-white w-[100%] flex flex-row flex-wrap  justify-between overflow-y-hidden text-3xl shadow-2xl text-black-color font-semibold' >
      
       
      <div className='w-[8rem] flex justify-center items-center'>LOGO</div>

      <div className='flex flex-row flex-wrap justify-between  w-[40rem] '>


       <div className='nav-link'>
       <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/" >Services</NavLink>
       </div>

       <div className='nav-link'>
       <NavLink data-id="2" style={{ textDecoration: 'none' }} to="/" >About</NavLink>
       </div>

       <div className='nav-link'>
       <NavLink data-id="3" style={{ textDecoration: 'none' }} to="/" >Contact Us</NavLink>
       </div>

       <div className='nav-link'>
       <NavLink data-id="4" style={{ textDecoration: 'none' }} to="/" >Support</NavLink>
       </div>


      </div>


      <div className='flex flex-row  justify-between w-[13rem]  '>

      <div className='nav-link'>
       <NavLink data-id="5" style={{ textDecoration: 'none' }} to="/" >Login</NavLink>
       </div>

      <div className='nav-link'>
       <NavLink data-id="6" style={{ textDecoration: 'none' }} to="/" >Sign Up</NavLink>
       </div>

      </div>

    </div>
  </div>
  )
}

export default Navbar
