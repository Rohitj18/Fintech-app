import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import DashboardNav from '../components/DashboardComponents/DashboardNav'
import Graph from '../components/DashboardComponents/Graph'

const Dashboard = () => {
    
    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}
            <DashboardNav/>
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
                        <div className='flex flex-row'>
                        {/* profit card */}
                            <div className='flex flex-col'>

                            </div>
                            <div></div>
                            <div></div>

                        </div>
                        <div className='w-[90%] h-[45%] mx-auto bg-white rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
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
