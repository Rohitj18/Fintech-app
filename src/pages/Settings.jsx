import React from 'react'
import { useParams,NavLink } from 'react-router-dom'
import SettingDashNav from '../components/settingsComponents/SettingDashNav'
import { BiBell } from 'react-icons/bi'
import { GrMailOption } from 'react-icons/gr'
import MyProfile from '../components/settingsComponents/MyProfile'
import Contact from '../components/settingsComponents/Contact'
import Wallet from '../components/settingsComponents/Wallet'

const Settings = () => {
    const { id } = useParams();
    console.log("This is router parameter", id);

    return (
        <div className='w-[100%] h-screen flex flex-row'>
            {/* dashborad navigator */}
            <div className='h-[100%] w-[20%]'>
                <SettingDashNav />
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
                            <NavLink data-id="5" style={{ textDecoration: 'none' }} to="/dashboard" >Dashboard</NavLink>
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
                                id === "profile" ? (<MyProfile />) : id === "contact-us" ? (<Contact />) : (<Wallet />)
                            }
                        </div>
                    </div>
                    {/* wallet and news */}
                    <div className='w-[25%] h-[100%] flex flex-col bg-white rounded-3xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings

