import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlinePercentage } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6'
import DashboardNav from '../components/DashboardComponents/DashboardNav'
// import Graph from '../components/DashboardComponents/Graph'
import SpendingGraph from '../components/DashboardComponents/SpendingGraph'
// import visalogo from '../assets/DashboardAssests/visalogo.png'
import { news } from '../components/DashboardComponents/NewsData'
import marketlogo from '../assets/DashboardAssests/maketnews.jpeg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getWalletDetails } from '../services/operations/walletApi'
import { getAdditionalDetails } from '../services/operations/authApi'
import { getCurrentMonthSum, getDateExpenes, getCurrentMonthExpenseArr } from '../services/operations/expenseApi'
import PieChart from '../components/DashboardComponents/PieChart'
import Spinner from '../components/Common/Spinner';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { token, userName } = useSelector((state) => state.auth);
    const { currentBalance } = useSelector((state) => state.wallet);
    const [addDets, setAddDets] = useState({ annualincome: 0 });
    const [name, setName] = useState("");
    const [todayExpense, setTodayExpense] = useState([]);
    const [balance, setBalance] = useState(localStorage.getItem("currentBalance") ? JSON.parse(localStorage.getItem("currentBalance")) : currentBalance ? currentBalance : 0);
    let newData = news.articles;
    const [final_width, setFinalWidth] = useState('');
    const [currExpnese, setCurrentExpnese] = useState(0);
    const [budget, setBudget] = useState(1);
    const [expenseArr, setExpenseArr] = useState(new Array(30).fill(0));
    const [timeStampArr, settimeStampArr] = useState([]);
    const [allExpense, setAllExpnese] = useState([]);
    const [expense_percentage,setExpensePercentage] = useState("");
    // expense_percentage = ((currExpnese / budget) * 100).toFixed(2);
    const [finalstring,setFinalString] = useState("0%")

    function getDatesForCurrentMonth() {
        const datesArray = [];
        for (let i = 1; i < 32; i++) {
            datesArray.push(i.toString());
        }
        return datesArray;
    }


    const fetchData = async () => {
        if (!currentBalance) {
            let walletDetailsResponse = await dispatch(getWalletDetails(token));
            setBalance(walletDetailsResponse.data?.data?.currentbalance);
        }
        const addidetails = await dispatch(getAdditionalDetails(token));
        let firstName = addidetails.data?.data?.firstName;
        let lastName = addidetails.data?.data?.lastName;
        let curreExpenseArr = await dispatch(getCurrentMonthExpenseArr(token));
        let tempArr = new Array(30).fill(0);

        curreExpenseArr.data.data.allExpense.forEach((item) => (
            tempArr[Number(item.timeStamp.substring(item.timeStamp.length - 2)) - 1] += item.amount
        ))
        setExpenseArr(tempArr);
        settimeStampArr(getDatesForCurrentMonth());
        setAddDets(addidetails.data?.data);
        setName(firstName.charAt(0).toUpperCase() + firstName.substring(1) + " " + lastName.charAt(0).toUpperCase() + lastName.substring(1));
        localStorage.setItem("userName", firstName.charAt(0).toUpperCase() + firstName.substring(1) + " " + lastName.charAt(0).toUpperCase() + lastName.substring(1));
        const totalExpense = await dispatch(getCurrentMonthSum(token));
        let expenseobject = totalExpense.data.data;
        setAllExpnese([Number(expenseobject.foodsum), Number(expenseobject.Electronicsum), Number(expenseobject.healthsum), Number(expenseobject.travelsum), Number(expenseobject.grocerySum), Number(expenseobject.othersum)]);
        setCurrentExpnese(totalExpense.data?.data?.Totalsum);
        var currentDate = new Date();
        var millisecondsInDay = 1000 * 60 * 60 * 24;
        var previousDay = new Date(currentDate.getTime() - millisecondsInDay);
        const expenseArrResponse = await dispatch(getDateExpenes(token, previousDay));
        setTodayExpense(expenseArrResponse.data?.data);
        setBudget(addidetails.data?.data?.personalexpense);
        setExpensePercentage(((currExpnese / budget) * 100).toFixed(2));
        setFinalString(expense_percentage.toString() + '%');
    }   

    useEffect(() => {
        setLoading(true);
        fetchData();
        setFinalWidth(finalstring);
        setLoading(false);
    }, []);


    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}
            <div className='h-[100%] w-[20%]'>
                <DashboardNav name={name} />
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
                    {
                        loading ? (<div className='flex w-[100%] h-[100%] items-center justify-center'><Spinner /></div>) : (
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
                                    <div className='flex flex-col w-[22%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                        <div className='flex flex-row gap-3 items-center '>
                                            <p className='text-3xl'>Monthly Income</p>
                                            <FaArrowTrendUp size={20} style={{ color: "green" }} />
                                        </div>
                                        <p className='text-3xl font-bold'>₹ {Number(addDets.annualincome) / 12}</p>
                                    </div>
                                    {/* Expense card */}
                                    <div className='flex flex-col w-[20%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <p className='text-3xl'>Total Expense</p>
                                            <FaArrowTrendDown size={20} style={{ color: "red" }} />
                                        </div>
                                        <p className='text-3xl font-bold'>₹ {currExpnese}</p>
                                    </div>
                                    {/* Radial */}
                                    <div className='flex flex-col w-[30%] h-[60%] gap-3 items-center justify-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <p className='text-3xl'>Expense perc.</p>
                                            <AiOutlinePercentage size={20} />
                                        </div>
                                        <div className='w-[90%] h-[40%] rounded-2xl bg-[#eceff5] overflow-x-hidden'>
                                            <div className={`h-[100%] ${Number(final_width.substring(0, 4)) < 50 ? "bg-green-600" : expense_percentage < 80 ? "bg-primary-blue" : "bg-red-600"} rounded-2xl`} style={{ width: `${final_width>100?"100%":final_width}` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[90%] h-[40%] bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                    <SpendingGraph dataArr={expenseArr} timeArr={timeStampArr} />
                                </div>
                                <div className='w-[90%] h-[32%] mt-[4%] flex flex-row justify-between'>
                                    <div className='w-[48%] h-[100%] pt-4 flex flex-col justify-center items-start bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                                        <p className='text-3xl font-semibold w-[100%] h-[20%] pl-3'>Expense Wheel</p>
                                        <div className='w-[100%] h-[80%]'>
                                            <PieChart allExpense={allExpense} />
                                        </div>
                                    </div>
                                    <div className='w-[48%] h-[100%] bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-4 flex flex-col items-start justify-start gap-3'>
                                        <p className='text-3xl font-semibold pl-3'>Today Expense</p>
                                        {
                                            todayExpense.length <= 0 ? (<div className='flex flex-col gap-4 justify-center items-center w-[100%] h-[100%]'>
                                                <p className='text-4xl'>No Expense Today</p>
                                                <button onClick={() => { navigate("/expense") }} className='bg-primary-blue p-3 text-white text-3xl rounded-md'>Add Expense</button>
                                            </div>) : (
                                                <div className='flex flex-col w-[100%] items-center overflow-y-scroll gap-4 '>
                                                    {
                                                        todayExpense.map((expense) => (
                                                            <div className='w-[95%] py-2 px-4 rounded-md bg-[#eceff5] flex items-center justify-between'>
                                                                <div className='flex gap-3 text-3xl'>
                                                                    <p>{expense.name}</p>
                                                                </div>
                                                                <div className='flex gap-3 text-3xl'>
                                                                    {/* <p >Price :</p> */}
                                                                    <p className='bg-white py-2 px-3 rounded-lg'> ₹ {expense.amount}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {/* wallet and news */}
                    <div className='w-[25%] h-[100%] flex flex-col bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                        {/* wallet */}
                        <div className='w-[100%] h-[30%] flex  justify-center items-center'>
                            <div className='w-[90%] h-[80%] rounded-2xl flex flex-col shadow-[rgba(236,_239,_245,_0.1)_0px_0px_16px]'>
                                <div className='text-white w-[100%] h-[30%] bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20% text-4xl rounded-tl-2xl rounded-tr-2xl flex justify-center items-center'>
                                    <p>Wallet</p>
                                </div>
                                <div className=' w-[100%] h-[70%] p-3 flex flex-col gap-4 bg-[#eceff5] rounded-bl-2xl rounded-br-2xl' >
                                    <p className=' text-3xl'>Account Balance</p>
                                    <div className='flex justify-between'>
                                        <p className='text-4xl pl-5 bg-white px-3 rounded-xl py-2'>₹ {balance}</p>
                                        <button onClick={() => { navigate("/settings/wallet") }} className='bg-primary-blue text-white rounded-md text-2xl p-2'>Add Money</button>
                                    </div>
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
                                                <img src={data.urlToImage === null ? marketlogo : data.urlToImage} alt="" className='w-[100%] h-[100%]' />
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

