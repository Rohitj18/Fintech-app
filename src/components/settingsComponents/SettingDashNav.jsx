import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {IoWalletSharp} from 'react-icons/io5'
import {BsHeadphones} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { useState ,useEffect} from 'react'

const SettingDashNav = ({name}) => {
    let iconStyles = { color: "white" };
    const {user}= useSelector((state)=>state.profile) || localStorage.getItem("user");
    const currLocation = useLocation();
    const tabSelector = currLocation.pathname.split('/').at(-1);
    const navigate = useNavigate();
    const[userName,setUserName] = useState("");
    useEffect(()=>{
        setUserName(JSON.parse(localStorage.getItem("UserName")))
    },[])
    
  return (
    <div className='flex flex-col w-[100%] h-[100%] bg-ternary-color py-12'>
                {/* profile */}
                <div className='w-[100%] h-[30%] flex flex-col justify-center items-center gap-5'>
                    <div className='w-[100%] h-[70%] flex justify-center items-center'>
                        <div className='w-[60%] h-[100%]'>
                            <img src={user.image} alt="" className='w-[100%] h-[100%] mx-auto' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div className='font-semibold text-3xl text-white'>{userName}</div>
                    </div>
                </div>
                <div className='w-[70%] h-[0.2%] mx-auto bg-primary-blue mt-[1em]'></div>
                <div className='w-[100%] h-[68%] flex flex-col gap-4 mt-[1.8rem]'>
                    <div onClick={()=>navigate("/settings/profile")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="profile"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <CgProfile size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Profile</p>
                    </div>
                    <div onClick={()=>navigate("/settings/wallet")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="wallet"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <IoWalletSharp size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Wallet</p>
                    </div>
                    <div onClick={()=>navigate("/settings/contact-us")} className={`flex flex-row gap-4 w-[100%] h-[10%] px-12 ${tabSelector==="contact-us"?" bg-primary-blue bg-opacity-25 border-l-8 border-blue-800":""} transition-all duration-800 ease-in-out hover:bg-primary-blue hover:bg-opacity-25 hover:border-l-8 border-blue-800 justify-start items-center`}>
                        <BsHeadphones size={24} style={iconStyles}/>
                        <p className='text-3xl text-white'>Contact Us</p>
                    </div>
                    
                </div>
            </div>
  )
}

export default SettingDashNav
