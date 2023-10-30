import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import SettingDashNav from '../components/settingsComponents/SettingDashNav'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import MyProfile from '../components/settingsComponents/MyProfile'
import Contact from '../components/settingsComponents/Contact'
import Wallet from '../components/settingsComponents/Wallet'
import { useDispatch, useSelector } from "react-redux";
import { getWalletDetails } from '../services/operations/walletApi'

const Settings = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [currentBalance, setCurrentBalance] = useState(0);
    const [wallethistory,setWalletHistory] = useState([]);
    const { token} = useSelector((state) => state.auth);
    const [name,setName] = useState("");
    const fetchData = async () => {
        let walletDetailsResponse = await dispatch(getWalletDetails(token));
        if (walletDetailsResponse) {
            setCurrentBalance(walletDetailsResponse.data?.data?.currentbalance);
            setWalletHistory(walletDetailsResponse.data.wallet.allWalletTrans);   
        }
        setName(localStorage.getItem("userName"));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}
            <div className='h-[100%] w-[20%]'>
                <SettingDashNav name={name}/>
            </div>
            {/* dashboard */}
            <div className='w-[80%] h-[100%] flex flex-col'>
                {/* navbar */}
                <div className=' flex flex-row justify-between items-center w-[100%] h-[7%] bg-[#eceff5] border-b-2 border-solid border-ternary-color pl-12'>
                    {/* search bar */}
                    <div className='flex w-[50%] h-[60%] items-center gap-4'>
                        <div className='w-[90%] h-[100%] rounded-[2rem] border-2 border-solid border-primary-blue'>
                            <input type="text" className='w-[100%] h-[100%] rounded-[2rem] text-center outline-primary-blue text-2xl' placeholder='Search' />
                        </div>
                    </div>
                    {/* notification icons */}
                    <div className='flex gap-5 w-[20%] h-[100%] justify-center items-center '>
                        <div className='nav-link w-[30%] h-[50%] text-2xl'>
                            <NavLink data-id="5" style={{ textDecoration: 'none' }} to="/dashboard" className="text-2xl text-black" >Dashboard</NavLink>
                        </div>
                        <BiBell size={26} />
                        <GrMailOption size={26} />
                    </div>
                </div>
                {/* wrapper */}
                <div className='w-[100%] h-[93%] flex flex-row'>
                    {/*middle section  */}
                    <div className='flex flex-col w-[75%] items-center h-[100%] bg-[#eceff5] overflow-y-scroll'>
                        <div className='w-[100%] h-[100%] justify-center items-center mx-auto'>
                            {
                                id === "profile" ? (<MyProfile />) : id === "contact-us" ? (<Contact />) : (<Wallet currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} setWalletHistory={setWalletHistory}/>)
                            }
                        </div>
                    </div>
                    {/* wallet and news */}
                    <div className='w-[25%] h-[100%] flex flex-col bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
                        {
                            id === "wallet" ? (<div className='flex flex-col w-[100%] h-[100%]'>
                                <div className='w-[100%] h-[10%] flex justify-center items-center border-b-2 border-solid border-primary-blue'>
                                    <p className='text-5xl'>Transaction History</p>
                                </div>
                                <div className='w-[100%] h-[90%] flex flex-col'>
                                    {
                                            wallethistory.map((item) => 
                                                (
                                                    <div className='w-[100%] h-[10%] border-b-2 border-solid flex items-center justify-between px-4'>
                                                    <div className='flex gap-2  justify-center items-center text-2xl'>
                                                        <div className='flex justify-center items-center mb-0'><p>Amount :</p></div>
                                                        <div className='bg-[#eceff5] p-2 rounded-md'>{item.amount} ₹</div>
                                                    </div>
                                                    <div className='flex gap-2 justify-center items-center text-2xl'>
                                                        <div><p>Date:</p></div>
                                                        <div className='bg-[#eceff5] p-2 rounded-md'>{item.time.toString().substring(0,10)}</div>
                                                    </div>
                                                </div>
                                                )
                                    )
                                    }
                                </div>
                            </div>) : (<></>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings

