import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import DashboardNav from '../components/DashboardComponents/DashboardNav'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import StockInfo from '../components/stockAnalysisComponents/StockInfo'
import { data } from '../components/LandingPageComponents/Data'
// import { StockData } from '../components/data/datapoints'
// import { current } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// import {Get_Gain_Loser} from '../services/operations/stockAPi'

const StockAnalysis = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [displayArr, setDisplayArr] = useState([]);
    const [allButton, setAllButton] = useState(true);
    const [gainButton, setGainButton] = useState(false);
    const [loseButton, setLoseButton] = useState(false);
    const [gainerArr, setGainerArr] = useState([]);
    const [loserArr, setLoserArr] = useState([]);
    const [mergeArr, setMergeArr] = useState([]);
    const [clickedStock,setClickedStock] = useState("");
    const [name,setName] = useState("");
    const buttonHanlder = (e) => {

        const id = e.currentTarget.id;
        if (id === "1") {
            setAllButton(true);
            setGainButton(false);
            setLoseButton(false);
            setDisplayArr(mergeArr);
        } else if (id === "2") {
            setAllButton(false);
            setGainButton(true);
            setLoseButton(false);
            setDisplayArr(gainerArr);
        } else if (id === "3") {
            setAllButton(false);
            setGainButton(false);
            setLoseButton(true);
            setDisplayArr(loserArr);
        }

    }

    const onClickHandler=(e)=>{
        const currStockName = e.currentTarget.id;
        setClickedStock(currStockName)
    }

    

    const fetchData = async () => {
        // const stData = await dispatch(Get_Gain_Loser());
        // const topGainers = stData.data?.data["Top Gainers"];
        // const toplosers = stData.data?.data["Top Gainers"];
        let newGainerArr = data.top_gainers;
        let newLoserArr = data.top_losers;
        let newMergeArr = newGainerArr.concat(newLoserArr);
        newMergeArr.sort(() => Math.random() - 0.5);

        setClickedStock(newMergeArr[0].ticker);
        setDisplayArr(newMergeArr);
        setGainerArr(newGainerArr);
        setLoserArr(newLoserArr);
        setMergeArr(newMergeArr);
        setName(localStorage.getItem("userName"));

    }



    useEffect(() => {
        fetchData();
    }, []);




    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}

            <div className='h-screen w-[20%]'>
                <DashboardNav name={name}/>
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
                <div className='w-[100%] h-[93%] flex flex-row overflow-y-hidden md:flex-col lg:flex-col'>
                    <div className='w-[40%] h-screen flex flex-col shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] '>
                        <div className='w-[100%] h-[8%] bg-white flex flex-row items-center justify-center'>


                            <div className={`nav-link w-[33.33%] h-[66%]`}>
                                <button id="1" className='w-[100%] h-[100%] text-3xl font-semibold text-primary-blue' onClick={buttonHanlder}>All</button>
                            </div>
                            <div className={`nav-link w-[33.33%] h-[66%]`}>
                                <button id="2" className='w-[100%] h-[100%] text-3xl font-semibold border-x-2 text-primary-blue' onClick={buttonHanlder}>Top Gainers</button>
                            </div>
                            <div className={`nav-link w-[33.33%] h-[66%]`}>
                                <button id="3" className='w-[100%] h-[100%] text-3xl font-semibold text-primary-blue' onClick={buttonHanlder}>Top Losers</button>
                            </div>
                        </div>
                        <div className='w-[100%] h-[85%] overflow-y-scroll'>
                            {
                                displayArr.map((item) => (
                                    <div id={`${item.ticker}`} onClick={onClickHandler} className={`${clickedStock=== item.ticker?"bg-[#EEEEEE]":""} bg-white w-[100%] h-[10%] border-y-2 border-solid px-7 border-[#EEEEEE] flex flex-row items-center justify-between transition-all duration-75 ease-in-out hover:bg-[#EEEEEE]`}>
                                        <p className={`${item.change_amount < 0 ? "text-red-500" : "text-green-500"} font-semibold text-3xl ml-8`}>{item.ticker}</p>
                                        <div className='flex flex-row text-2xl gap-6 w-[50%] h-[100%] items-center'>
                                            <div className='bg-[#eceff5] w-[20%] h-[40%] flex justify-center items-center rounded-lg'>
                                                <p>{Number(item.price).toFixed(2)}</p>
                                            </div>
                                            <div className='flex flex-row items-center justify-center w-[35%] h-[40%] gap-1 bg-[#eceff5] rounded-lg'>
                                                {item.change_amount < 0 ? (<IoIosArrowDown style={{ "color": "red" }} />) : (<IoIosArrowUp style={{ "color": "green" }} />)}
                                                <p>{item.change_amount < 0 ? "" : " "}{Number(item.change_amount).toFixed(3)}</p>
                                            </div>
                                            <div className='bg-[#eceff5] w-[30%] h-[40%] flex justify-center items-center rounded-lg'>
                                                <p>{item.change_amount < 0 ? "" : " "}{Number(item.change_percentage.slice(0, -1)).toFixed(2)}%</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div key={clickedStock} className='w-[60%] h-[100%] bg-[#eceff5]'>
                        <StockInfo stockName={clickedStock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default StockAnalysis
