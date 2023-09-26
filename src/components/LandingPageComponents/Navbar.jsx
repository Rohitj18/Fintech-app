import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import TickerTape from './TickerTape'
import logo from '../../assets/foxwealthlogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../services/operations/authApi'

// h-[100vh] w-[100%] bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20%

const Navbar = () => {
  //border-4 border-indigo-500/100
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutaHanlder = ()=>{
    dispatch(logout(navigate));
  }
  return (
    <div className='fixed w-[100%] z-10'>
      <TickerTape />
      <div className='w-[100%] h-[0.3em] bg-primary-blue'></div>
      <div className='p-[0.5rem] bg-white w-[100%] flex flex-row flex-wrap  justify-between overflow-y-hidden text-3xl shadow-2xl text-black-color font-semibold' >


        <div className='w-[8rem] flex justify-center items-center gap-2 ml-[5em]'>
          <img src={logo} alt="" className='w-[100%] h-[2em]' />
          <p className='text-primary-blue font-semibold text-4xl'>WealthFox</p>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-between  w-[40rem] '>


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


        <div className='flex flex-row  justify-between w-[18rem]  '>
          {!token &&

            <div className='flex flex-row  justify-between w-[13rem]'>
              <div className='nav-link'>
                <NavLink data-id="5" style={{ textDecoration: 'none' }} to="/login" >Login</NavLink>
              </div>

              <div className='nav-link'>
                <NavLink data-id="6" style={{ textDecoration: 'none' }} to="/signup" >Sign Up</NavLink>
                {/* <NavLink data-id="6" style={{ textDecoration: 'none' }} to="/signup" >Sign Up</NavLink> */}
              </div>
            </div>

          }
          {token && 
            <div className='flex flex-row gap-4 justify-between w-[18rem]'>
              <div className='nav-link'>
                <NavLink data-id="5" style={{ textDecoration: 'none' }} to="/dashboard" >Dashboard</NavLink>
              </div>
              <div className='nav-link' onClick={logoutaHanlder}>
                <NavLink data-id="6" style={{ textDecoration: 'none' }} to="/" >Log Out</NavLink>
                {/* <NavLink data-id="6" style={{ textDecoration: 'none' }} to="/signup" >Sign Up</NavLink> */}
              </div>
            </div> 

          }
        </div>

      </div>
    </div>
  )
}

export default Navbar
