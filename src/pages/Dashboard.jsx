import React from 'react'
import { AiOutlineSearch,AiOutlineDashboard,AiOutlineCalculator,AiOutlineDollarCircle,AiOutlineStock} from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import {RiCurrencyFill} from 'react-icons/ri'
import {MdDataThresholding} from 'react-icons/md'
import foxlogo from '../assets/foxwealthlogo.png'
import Graph from '../components/DashboardComponents/Graph'

const Dashboard = () => {
    let iconStyles = { color: "white" };
    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}
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
            {/* dashboard */}
            <div className='w-[80%] h-[100%] flex flex-col bg-red-400'>
                {/* navbar */}
                <div className=' flex flex-row justify-between items-center w-[100%] h-[7%] bg-[#eceff5] border-b-2 border-solid border-ternary-color px-12'>
                    {/* search bar */}
                    <div className='flex w-[50%] h-[60%] items-center gap-4'>
                        <div className='w-[90%] h-[100%] rounded-[2rem] border-2 border-solid border-primary-blue'>
                            <input type="text" className='w-[100%] h-[100%] rounded-[2rem] text-center outline-primary-blue text-2xl' placeholder='Search' />
                        </div>
                        <AiOutlineSearch size={28} />
                    </div>
                    {/* notification icons */}
                    <div className='flex gap-8'>
                        <BiBell size={26} />
                        <GrMailOption size={26} />
                    </div>
                </div>
                {/* wrapper */}
                <div className='w-[100%] h-[94%] flex flex-row'>
                    <div className='flex flex-col w-[80%] h-[100%] bg-[#eceff5]'>
                        <div className='w-[90%] h-[45%] mx-auto'>
                            <Graph/>
                        </div>
                    </div>
                    {/* wallet and news */}
                    <div className='w-[20%] h-[100%] bg-green-400'>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
