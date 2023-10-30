import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import OTPInputGroup from './OTPInputGroup';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {signUp} from "../../services/operations/authApi"
import { setSignupData } from "../../slices/authSlice"
import CountdownTimer from '../auth/Timer'

const SignupForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isOtpForm, setIsOtpForm] = useState(false);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        if (formData.password !== formData.confirmPassword) {

            return;
        }

        // setIsLoggedIn(true);

        // const accountData = {
        //     ...formData
        // };

        // const finalData = {
        //     ...accountData,
        //     accountType
        // }

        setIsOtpForm(!isOtpForm);
    }

    function otphandler(event){
        event.preventDefault();
        dispatch(setSignupData(formData))
        dispatch(signUp(formData.email,formData.password,formData.confirmPassword,navigate));
        navigate("/login");
    }
    return (
        <div className='flex flex-col justify-center items-center w-[100%] h-[80%] relative'>



            <form onSubmit={submitHandler} className={`flex flex-col w-[60%] gap-y-4 mt-6 items-center justify-center ${isOtpForm === false ? "visible" : "hidden"}`}>

                {/* email Add */}

                <label className='w-[100%]'>
                    <p className='text-primary-blue text-3xl font-semibold'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl'
                    />
                </label>



                {/* createPassword and Confirm Password */}

                <label className='w-[100%] mt-[2em]'>
                    <p className='text-primary-blue text-3xl font-semibold'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl'
                    />
                    <span
                        className='absolute right-[17rem] top-[29.5rem] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ?

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>

                <label className='w-[100%] mt-[2em]'>
                    <p className='text-primary-blue text-3xl font-semibold'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='outline-none border-b-2 border-primary-blue w-full p-[12px] text-2xl'
                    />
                    <span
                        className='absolute right-[17rem] top-[39.3rem] cursor-pointer'
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :

                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>

                <div className="mt-[1rem] flex flex-row text-[2em] text-white bg-primary-blue w-[100%] h-[2em] rounded-xl font-semibold">
                    <button className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-3 ">
                        <p>Signup</p>

                    </button>
                </div>
            </form>
            <form onSubmit={otphandler} className={`flex flex-col w-[60%] gap-4 mt-6 items-center justify-center ${isOtpForm === true ? "visible" : "hidden"}`}>
                <div className='flex flex-col items-center gap-3'>
                    <p className='font-bold text-6xl'>Verification</p>
                    <p className='font-semibold text-3xl'>Enter the code sent to your email.</p>
                </div>

                <div className='mt-[5em]'>
                    <OTPInputGroup/>
                </div>

                <div className='w-[70%] h-[5em] mt-[5em]'>
                    <button className='bg-primary-blue text-5xl w-[100%] h-[100%] rounded-[3rem] text-white'>Continue</button>
                </div>
                <div className='flex gap-2 mt-[2em]'>
                    <p className='text-2xl'>Resending OTP in <span><CountdownTimer totalSec={30 * 1000}/></span> seconds</p>
                </div>
            </form>

        </div>

    )
}

export default SignupForm
