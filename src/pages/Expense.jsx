import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardComponents/DashboardNav'
import { AiOutlineSearch} from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import { GiMoneyStack } from 'react-icons/gi'
import { BiRupee } from 'react-icons/bi'
import { GiReceiveMoney } from 'react-icons/gi'
import StripCalender from '../components/ExpenseComponents/StripCalender'
import Main from '../components/ExpenseComponents/ExpensesList/Main'
import { useDispatch } from 'react-redux'
import {getCurrentMonthSum} from '../services/operations/expenseApi'
import { useSelector } from "react-redux";
import {getAdditionalDetails} from '../services/operations/authApi'
import Spinner from '../components/ExpenseComponents/ExpensesList/Spinner'



const Expense = () => {
    const dispatch = useDispatch();
    let iconStyles = { color: "black", fontSize: '2.3rem' };
    const {token,userName} = useSelector((state)=>state.auth);
    const [loading,setLoading] = useState(false);
    const [budget,setBudget] = useState(0);
    const [totalExpense,setTotalExpense] = useState(0);
    const [totalData,setTotalData] = useState(0);
    var currentDate = new Date();
    var millisecondsInDay = 1000 * 60 * 60 * 24;
    var previousDay = new Date(currentDate.getTime() - millisecondsInDay);
    const [mainDate,setMainDate] = useState(previousDay);
    const [name,setName] = useState("");
    async function fetchData(){
        let currMonthTotal = await dispatch(getCurrentMonthSum(token));
        setTotalExpense(currMonthTotal.data?.data?.Totalsum);
        setName(localStorage.getItem("userName"));
        let additionalDetails = await dispatch(getAdditionalDetails(token));
        setTotalData(currMonthTotal.data?.data);
        setBudget(additionalDetails.data?.data?.personalexpense);
    }

    useEffect(()=>{
        setLoading(true);
        fetchData();
        setLoading(false);
    },[]);

  return (
   
    <div className='w-[100%] h-screen flex flex-row overflow-y-hidden'>
    {/* dashborad navigator */}
    <div className='w-[20%] h-[100%]'>
        <DashboardNav name={name}/>
    </div>
    {/* dashboard */}
    <div className='w-[80%] h-[100%] flex flex-col '>
        {/* navbar */}
        <div className=' flex flex-row justify-between items-center w-[100%] h-[6%] bg-[#eceff5] border-b-2 border-solid border-ternary-color px-12'>
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
                {/* start here */}


                    <div className='flex flex-row justify-evenly  h-[15%] w-[100%] mt-4'>
                        <div className=' bg-white h-[100%]  w-[30%] flex flex-row justify-center items-center gap-5 rounded-xl box-shadow'>
                                <div className='flex flex-row justify-center items-center gap-1 '>
                                    <span><GiMoneyStack style={iconStyles}/></span>
                                    <span className='text-4xl font-semibold'>Budget</span>
                                </div>
                                <div className='flex flex-row justify-center items-center'>
                                    <span><BiRupee style={iconStyles}/></span>
                                    <span className='text-3xl font-medium '> {loading?(<Spinner/>):(<p>{budget}</p>)}</span>
                                </div>
                            
                        </div>

                        <div className='bg-white  h-[100%]  w-[30%] flex flex-row justify-center items-center gap-5 rounded-xl box-shadow'>
                                <div className='flex flex-row justify-center items-center gap-1 '>
                                    <span><GiReceiveMoney  style={iconStyles}/></span>
                                    <span className='text-4xl font-semibold'>Expenses</span>
                                </div>
                                <div className='flex flex-row justify-center items-center'>
                                    <span><BiRupee style={iconStyles}/></span>
                                    <span className='text-3xl font-medium'> {loading?(<Spinner/>):(<p>{totalExpense}</p>)} </span>
                                </div>
                            
                        </div>


                        <div className='bg-white   w-[30%] rounded-xl box-shadow'>
                            
                        </div>
                    </div>
        
   
             


                {/* end here */}


                <div className=' w-[95%] flex mx-auto'>
                    <StripCalender mainDate={mainDate} setMainDate={setMainDate}/>
                </div>

                <div className='w-[100%] h-[55%]'>
                    <Main key={mainDate} mainDate={mainDate} setMainDate={setMainDate}/>
                </div>
              

            </div>
            {/* wallet and news */}
            <div className='w-[0.2%] h-[100%] mx-auto bg-primary-blue'></div>
            <div className='w-[23%] h-[100] bg-[#eceff5] flex flex-col  items-center gap-5'>

                    <div className='w-[100%] h-[10%] flex items-center justify-center border-solid border-black'>
                            <p className='text-4xl'>Category wise purchased</p>
                    </div>
                    <div className='w-[90%] h-[0.5%] rounded-full  bg-primary-blue'></div>
                <div className='flex flex-col w-[100%] h-[89.5%] justify-center items-center   gap-10'>

                
                            <div className='bg-white flex flex-row justify-evenly items-center     w-[90%] h-[12%] rounded-xl box-shadow'>
                               <p className='text-4xl font-semibold text-primary-blue'> Food: </p>
                               <p className='text-3xl font-medium '>{loading?(<Spinner/>):(<p>{((Number(totalData!==0?totalData.foodsum:0)/totalExpense)*(100)).toFixed(2)}%</p>)}</p>
                            </div>
                            <div className='bg-white flex flex-row justify-evenly items-center     w-[90%] h-[12%] rounded-xl box-shadow'>
                               <p className='text-4xl font-semibold text-primary-blue'> Travel: </p>
                               <p className='text-3xl font-medium '>{loading?(<Spinner/>):(<p>{((Number(totalData!==0?totalData.travelsum:0)/totalExpense)*(100)).toFixed(2)}%</p>)}</p>
                            </div>
                            <div className='bg-white flex flex-row justify-evenly items-center     w-[90%] h-[12%] rounded-xl box-shadow'>
                               <p className='text-4xl font-semibold text-primary-blue'> Health: </p>
                               <p className='text-3xl font-medium '>{loading?(<Spinner/>):(<p>{((Number(totalData!==0?totalData.healthsum:0)/totalExpense)*(100)).toFixed(2)}%</p>)}</p>
                            </div>
                            <div className='bg-white flex flex-row justify-evenly items-center     w-[90%] h-[12%] rounded-xl box-shadow'>
                               <p className='text-4xl font-semibold text-primary-blue'> Grocery: </p>
                               <p className='text-3xl font-medium '>{loading?(<Spinner/>):(<p>{((Number(totalData!==0?totalData.grocerySum:0)/totalExpense)*(100)).toFixed(2)}%</p>)}</p>
                            </div>
                            <div className='bg-white flex flex-row justify-evenly items-center     w-[90%] h-[12%] rounded-xl box-shadow'>
                               <p className='text-4xl font-semibold text-primary-blue'> Electronics: </p>
                               <p className='text-3xl font-medium '>{loading?(<Spinner/>):(<p>{((Number(totalData!==0?totalData.Electronicsum:0)/totalExpense)*(100)).toFixed(2)}%</p>)}</p>
                            </div>
                            <div className='bg-white flex flex-row justify-evenly items-center     w-[90%] h-[12%] rounded-xl box-shadow'>
                               <p className='text-4xl font-semibold text-primary-blue'> Others: </p>
                               <p className='text-3xl font-medium '>{loading?(<Spinner/>):(<p>{((Number(totalData!==0?totalData.othersum:0)/totalExpense)*(100)).toFixed(2)}%</p>)}</p>
                            </div>
                          

                </div>
                

            </div>
        </div>
    </div>
</div>
  )
}

export default Expense
