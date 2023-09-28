import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlinePercentage } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6'
import DashboardNav from '../components/DashboardComponents/DashboardNav'
import Graph from '../components/DashboardComponents/Graph'
import visalogo from '../assets/DashboardAssests/visalogo.png'
import { news } from '../components/DashboardComponents/NewsData'
import marketlogo from '../assets/DashboardAssests/maketnews.jpeg'

const Dashboard = () => {
    let newData = news.articles;
    const [final_width, setFinalWidth] = useState('');
    let monthly_income = 9827
    let total_expense = 8000
    var expense_percentage = ((total_expense / monthly_income) * 100).toFixed(2);
    let finalstring = expense_percentage.toString() + '%';
    useEffect(() => {
        setFinalWidth(finalstring);
    }, []);


    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}
            <div className='h-[100%] w-[20%]'>
                <DashboardNav />
            </div>
            {/* dashboard */}
            <div className='w-[80%] h-[100%] flex flex-col'>
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
                <div className='w-[100%] h-[93%] flex flex-row'>
                    {/*middle section  */}
                    <div className='flex flex-col w-[75%] items-center h-[100%] bg-[#eceff5]'>
                        <div className='w-[90%] h-[20%] items-center flex flex-row justify-between'>
                            {/* profit card */}
                            <div className='flex flex-col w-[20%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <p className='text-3xl'>Total Profit</p>
                                    <FaArrowTrendUp size={20} style={{ color: "green" }} />
                                </div>
                                <p className='text-3xl font-bold'>+$35250</p>
                            </div>
                            {/* Income card */}
                            <div className='flex flex-col w-[20%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                <div className='flex flex-row gap-3 items-center '>
                                    <p className='text-3xl'>Monthly Income</p>
                                    <FaArrowTrendUp size={20} style={{ color: "green" }} />
                                </div>
                                <p className='text-3xl font-bold'>$9827</p>
                            </div>
                            {/* Expense card */}
                            <div className='flex flex-col w-[20%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <p className='text-3xl'>Total Expense</p>
                                    <FaArrowTrendDown size={20} style={{ color: "red" }} />
                                </div>
                                <p className='text-3xl font-bold'>$5400</p>
                            </div>
                            {/* Radial */}
                            <div className='flex flex-col w-[30%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <p className='text-3xl'>Expense perc.</p>
                                    <AiOutlinePercentage size={20} />
                                </div>
                                <div className='w-[90%] h-[40%] rounded-2xl bg-[#eceff5]'>
                                    <div className="h-[100%] bg-primary-blue rounded-2xl" style={{ width: `${final_width}` }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[90%] h-[40%] bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                            <Graph />
                        </div>
                        <div className='w-[90%] h-[32%] mt-[4%] flex flex-row justify-between'>
                            <div className='w-[48%] h-[100%] bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>

                            </div>
                            <div className='w-[48%] h-[100%] bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>

                            </div>
                        </div>
                    </div>
                    {/* wallet and news */}
                    <div className='w-[25%] h-[100%] flex flex-col bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                        {/* wallet */}
                        <div className='w-[100%] h-[30%] flex justify-center items-center'>
                            <div className='w-[90%] h-[80%]  justify-between p-[2.3em] bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20% glass-effect4 rounded-2xl flex flex-col shadow-[rgba(236,_239,_245,_0.1)_0px_0px_16px]'>
                                <div className='flex flex-col gap-5'>
                                    <p className='text-white text-3xl'>Account Balance</p>
                                    <p className='text-white text-4xl'>$3000</p>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='w-[7rem] h-[4rem]'>
                                        <img src={visalogo} alt="" className='w-[100%] h-[100%]' />
                                    </div>
                                    <p className='text-white text-3xl'>**** 0313</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] h-[0.5%] rounded-full mx-auto bg-primary-blue'></div>
                        <div className='w-[100%] h-[70%] flex flex-col'>
                            <div className='w-[100%] h-[10%] flex items-center justify-center border-solid border-black'>
                                <p className='text-4xl'>Market News</p>
                            </div>
                            <div className='w-[100%] h-[90%] gap-5 flex flex-col overflow-y-scroll'>
                                {
                                    newData.map((data) => (
                                        <div className='w-[100%] h-[15%]  flex flex-row shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                            <div className='h-[100%] w-[30%]'>
                                                <img src={data.urlToImage===null?marketlogo:data.urlToImage} alt="" className='w-[100%] h-[100%]' />
                                            </div>
                                            <div className='h-[100%] w-[70%] p-3 overflow-y-hidden'>
                                                <p className='text-xl font-semibold'><a href={data.url} style={{ textDecoration: 'none' }}>{data.title.substring(0, 100)}</a></p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

