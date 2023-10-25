import React from 'react'
import {AiOutlineDashboard,AiOutlineCalculator,AiOutlineDollarCircle,AiOutlineStock} from 'react-icons/ai'
import {RiCurrencyFill} from 'react-icons/ri'
import {IoSettingsSharp} from 'react-icons/io5'
import {MdDataThresholding} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DashboardNav = ({name}) => {
    let iconStyles = { color: "white" };
    const {user}= useSelector((state)=>state.profile) || localStorage.getItem("user");
    const currLocation = useLocation();
    const tabSelector = currLocation.pathname.split('/').at(-1);
    const navigate = useNavigate();
    
  return (
    <div className='flex flex-col w-[100%] h-[100%] bg-ternary-color py-12'>
                {/* profile */}
                <div className='w-[100%] h-[30%] flex flex-col justify-center items-center gap-5'>
                    <div className='w-[100%] h-[70%] flex justify-center items-center'>
                        <div className='w-[60%] h-[100%]'>
                            <img src={user.image} alt="" className='w-[100%] h-[100%] mx-auto' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div className='font-semibold text-3xl text-white'>{name}</div>
                        <IoSettingsSharp size={22} style={{"color":"white"}} className='transition-all duration-300 ease-in-out hover:-rotate-90' onClick={()=>navigate("/settings/profile")}/>
                    </div>
                </div>
                <div className='w-[70%] h-[0.2%] mx-auto bg-primary-blue mt-[1em]'></div>
                <div className='w-[100%] h-[68%] flex flex-col gap-4 mt-[1.8rem]'>
                    <div onClick={()=>navigate("/dashboard")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="dashboard"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <AiOutlineDashboard size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Dashboard</p>
                    </div>
                    <div onClick={()=>navigate("/sip-calculator")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="sip-calculator"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <AiOutlineCalculator size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>SIP Calculator</p>
                    </div>
                    <div className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="investments"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <AiOutlineDollarCircle size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Investments</p>
                    </div>
                    <div onClick={()=>navigate("/expense")}className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="expense"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <RiCurrencyFill size={24} style={iconStyles}/>
                    <p className='text-3xl text-white'>Expenses</p>
                         

                    </div>
                    <div onClick={()=>navigate("/stock-analysis")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="stock-analysis"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <AiOutlineStock size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Stock Analysis</p>
                    </div>
                    <div className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="deep-analysis"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <MdDataThresholding size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Deep Analysis</p>
                    </div>
                    <div onClick={()=>navigate("/")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="deep-analysis"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <BiLogOut size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Logout</p>
                    </div>
                </div>
            </div>
  )
}

export default DashboardNav
