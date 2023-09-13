import React from 'react'
import {AiOutlineDashboard,AiOutlineCalculator,AiOutlineDollarCircle,AiOutlineStock} from 'react-icons/ai'
import {RiCurrencyFill} from 'react-icons/ri'
import {MdDataThresholding} from 'react-icons/md'
import foxlogo from '../../assets/foxwealthlogo.png'

const DashboardNav = () => {
    let iconStyles = { color: "white" };
  return (
    <div className='flex flex-col w-[20%] h-[100%] bg-ternary-color py-12'>
                {/* profile */}
                <div className='w-[100%] h-[30%] flex flex-col justify-center items-center gap-3'>
                    <div className='w-[100%] h-[70%] flex justify-center items-center'>
                        <img src={foxlogo} alt="" className='w-[60%] h-[100%]' />
                    </div>
                    <div className='font-semibold text-3xl text-white'>Rohit Jabade</div>
                </div>
                <div className='w-[70%] h-[0.2%] mx-auto bg-primary-blue mt-[1em]'></div>
                <div className='w-[100%] h-[68%] flex flex-col gap-4 mt-[1.8rem]'>
                    <div className='flex flex-row gap-4 w-[100%] h-[10%] px-12 transition-all duration-800 ease-in-out hover:bg-primary-blue justify-start items-center'>
                        <AiOutlineDashboard size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Dashboard</p>
                    </div>
                    <div className='flex flex-row gap-4 w-[100%] h-[10%] px-12 transition-all duration-800 ease-in-out hover:bg-primary-blue justify-start items-center'>
                        <AiOutlineCalculator size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>SIP Calculator</p>
                    </div>
                    <div className='flex flex-row gap-4 w-[100%] h-[10%] px-12 transition-all duration-800 ease-in-out hover:bg-primary-blue justify-start items-center'>
                        <AiOutlineDollarCircle size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Investments</p>
                    </div>
                    <div className='flex flex-row gap-4 w-[100%] h-[10%] px-12 transition-all duration-800 ease-in-out hover:bg-primary-blue justify-start items-center'>
                        <RiCurrencyFill size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Expenses</p>
                    </div>
                    <div className='flex flex-row gap-4 w-[100%] h-[10%] px-12 transition-all duration-800 ease-in-out hover:bg-primary-blue justify-start items-center'>
                        <AiOutlineStock size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Stock Analysis</p>
                    </div>
                    <div className='flex flex-row gap-4 w-[100%] h-[10%] px-12 transition-all duration-800 ease-in-out hover:bg-primary-blue justify-start items-center'>
                        <MdDataThresholding size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Deep Analysis</p>
                    </div>
                </div>
            </div>
  )
}

export default DashboardNav
