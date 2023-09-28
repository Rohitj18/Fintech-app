import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import DashboardNav from '../components/DashboardComponents/DashboardNav'
import Graph from '../components/DashboardComponents/Graph'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import { data } from '../components/LandingPageComponents/Data'


const StockAnalysis = () => {
    const [displayArr, setDisplayArr] = useState([]);
    const [allStocks, setAllStocks] = useState([]);
    const [gainerStock, setGainerStock] = useState([]);
    const [loserStock, setLoserStock] = useState([]);
    const fetchData = async () => {
        let gainerArr = data.top_gainers;
        let loserArr = data.top_losers;
        let mergeArr = gainerArr.concat(loserArr);
        mergeArr.sort(() => Math.random() - 0.5);

        setAllStocks(mergeArr);
        setGainerStock(gainerArr);
        setLoserStock(loserArr);
        setDisplayArr(mergeArr);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {

    }, []);


    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}

            <div className='h-screen w-[20%]'>
                <DashboardNav />
            </div>
            {/* dashboard */}
            <div className='w-[80%] h-screen flex flex-col'>
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
                <div className='w-[100%] h-screen flex flex-row overflow-y-hidden'>
                    <div className='w-[40%] h-screen flex flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] '>
                        <div className='w-[100%] h-[20%] bg-red-400'>

                        </div>
                        <div className='w-[100%] h-[80%] overflow-y-scroll'>
                        {
                            displayArr.map((item) => (
                                <div className='bg-white w-[100%] h-[10%] border-y-2 border-solid px-7 border-[#EEEEEE] flex flex-row items-center justify-between transition-all duration-75 ease-in-out hover:bg-[#EEEEEE]'>
                                    <p className='font-semibold text-3xl'>{item.ticker}</p>
                                    <div className='flex flex-row text-2xl gap-4'>
                                        <p>{item.price}</p>
                                        <div className='flex flex-row items-center'>
                                            <IoIosArrowUp />
                                            <p>{item.change_amount}</p>
                                        </div>
                                        <p>{item.change_percentage}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className='w-[60%] h-[100%] bg-[#eceff5]'></div>
                </div>
            </div>
        </div>
    )
}





export default StockAnalysis
