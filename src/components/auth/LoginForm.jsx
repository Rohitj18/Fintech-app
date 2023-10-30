import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { NavLink,useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux"

import {login} from '../../services/operations/authApi'

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();
        dispatch(login(formData.email, formData.password, navigate))
        

    }


    return (

        <div className='flex flex-col justify-center items-center w-[100%] h-[80%]'>



            <form onSubmit={submitHandler} className="flex flex-col w-[60%] gap-y-4 mt-6 items-center justify-center ">

                <label className='w-[100%]'>
                    <p className='text-primary-blue text-3xl font-semibold'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        value={formData.email}
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
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        name="password"
                        className='outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl'
                    />

                    <span
                        className='absolute right-3 top-[3.5rem] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ?

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
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

    )
}

export default LoginForm
