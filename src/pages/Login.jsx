import loginlogo from '../assets/loginimg.png'
import foxlogo from '../assets/foxwealthlogo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState, useEffect } from 'react';
import {Link,NavLink} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'


function Login() {

  let iconStyles = { color: "white", fontSize: '2.3rem' };

        
  const [formData, setFormData] = useState( {
    email:"", password:""
})

const[showPassword, setShowPassword] = useState(false);

function changeHandler(event) {

    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )

}

function submitHandler(event) {
    event.preventDefault();
 

    console.log("Printing the formData ");
    console.log(formData)
 
}



  return (
    <div className='w-[100%] h-screen flex justify-center items-center'>
      <div className='flex flex-row w-[100%] h-[100%]'>
        <div className="w-[50%] h-[100%] bg-ternary-color flex flex-col gap-14 justify-center items-center">
          <div className='w-[60%] h-[55%]'>
            <img src={loginlogo} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='flex flex-col gap-7 justify-center items-center'>
            <p className='text-white text-6xl'>WealthFox One Account</p>
            <p className='text-white text-3xl'>One Account. Multiple Benefits.</p>
          </div>
        </div>

        {/* right section */}
        <div className="px-[2em] w-[50%] h-[100%] flex flex-col  items-center">
              
             <div className='flex flex-row justify-between mt-5 items-center w-[100%] h-[10%]'>
              <div className='w-[12rem] h-[8rem] flex justify-center items-center gap-2 ml-[5em]'>
                  <img src={foxlogo} alt="" className='w-[100%] h-[100%]'/>
                    <p className='text-primary-blue font-semibold text-4xl'>WealthFox</p>
              </div>

              <div className='flex flex-row gap-10 text-4xl'>
                <div className='nav-link'>
                  <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/" >Home</NavLink>
                </div>

                <div className='nav-link'>
                  <NavLink data-id="2" style={{ textDecoration: 'none' }} to="/signup" >Sign up</NavLink>
                </div>
              </div>

             </div>




             <div className='flex flex-col justify-center items-center w-[100%] h-[80%]'>


  
             <form onSubmit={submitHandler} className="flex flex-col w-[60%] gap-y-4 mt-6 items-center justify-center ">

        <label className='w-[100%]'>
            <p className='text-primary-blue text-3xl font-semibold'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl'
            />
        </label>

        <label className='w-[100%] relative mt-[3em]'>
            <p className='text-primary-blue text-3xl font-semibold'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl'
            />

            <span 
            className='absolute right-3 top-[3.5rem] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>


            <div className='text-lg mt-1 text-primary-blue max-w-max ml-auto '>
                  <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/" >Forgot Password</NavLink>
              </div>
        </label>

     

       <div className=" flex flex-row text-[2em] text-white bg-primary-blue w-[100%] h-[2em] rounded-xl font-semibold">
            <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
              <p>Login</p>
             
            </button>
          </div>

          <div className='text-xl mt-1 text-primary-blue max-w-max ml-auto '>
                  <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/signup" >Create an Account</NavLink>
              </div>
          

    </form>


             </div>

        </div>


      </div>


    </div>
  )
}

export default Login