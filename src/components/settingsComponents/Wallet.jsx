import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCard from "./CreditCard";
import {BsArrowRight} from 'react-icons/bs'
import {AddMoney} from '../../services/operations/walletApi'
import { useDispatch,useSelector  } from "react-redux";
import moment from 'moment';


function Wallet({currentBalance ,setCurrentBalance,setWalletHistory}) {  
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth);
  const [amount,setAmount] = useState(0);

  const changeHandler = (event)=>{
    setAmount(event.target.value);
  }

  const clickHandler = async()=>{
    const AddMoneyResponse = dispatch(AddMoney(token,amount)); 
    if(AddMoneyResponse){
      setCurrentBalance(Number(currentBalance)+Number(amount));
      setWalletHistory((prev)=>[...prev,{amount:amount,time:moment(new Date()).format('YYYY-MM-DD')}]);
    }
    setAmount(0);
  }
  return (
    <div className="flex flex-col items-center w-[100%] h-[90%] mt-10">
      <div className="text-5xl font-bold">
        Add Money to your wallet
      </div>
      <div className="flex gap-2 text-4xl my-4">
        <p>Current Balance : </p>
        <div className="flex items-center justify-center">{currentBalance} ₹</div>
      </div>
      <div className="flex flex-col w-[35%] h-[10%] gap-2 my-8">
        <p className="text-3xl">Enter the Amount</p>
        <input type="number" value={amount} onChange={changeHandler} placeholder="Amount" className="w-[100%] h-[50%] mx-auto text-2xl pl-6 border-primary-blue border-2 outline-primary-blue"/>
      </div>
      <CreditCard />
      <button onClick={clickHandler} className=" flex justify-center items-center gap-4 mt-[5em] w-[35%] h-[6%] text-2xl font-semibold text-white bg-primary-blue">
        <p>Add Money</p>
        <BsArrowRight size={28} />
      </button>
    </div>
  );
}
export default Wallet;
