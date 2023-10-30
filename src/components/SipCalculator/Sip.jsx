import React, { useEffect } from "react";
import DashboardNav from "../DashboardComponents/DashboardNav";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { GrMailOption } from "react-icons/gr";
import { useState } from "react";

// import { GiMoneyStack } from 'react-icons/gi'
import { BiRupee } from 'react-icons/bi'
// import { GiReceiveMoney } from 'react-icons/gi'
// import StripCalender from '../components/SipComponents/StripCalender'
// import Main from '../components/SipComponents/SipsList/Main'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Sip = () => {
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [sliderValue3, setSliderValue3] = useState(0);

  // const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  // const [totalValue, setTotalValue] = useState(0);
  const [name,setName] = useState("");
 

  const handleSliderChange1 = (event) => {
    setSliderValue1(event.target.value);
    estAmountHandler();
  };

  const handleSliderChange2 = (event) => {
    setSliderValue2(event.target.value);
    estAmountHandler();
  };

  const handleSliderChange3 = (event) => {
    setSliderValue3(event.target.value);
    estAmountHandler();
  };

  useEffect(()=>{
    setName(localStorage.getItem("userName"))
  },[])

  const estAmountHandler=()=>{
    // let est = sliderValue1 * ({[1 + (sliderValue2/12)] ^ n - 1} / i) × (1 + i).
    let  p =sliderValue1;
    let  n = sliderValue3;
    let  i = (sliderValue2/12)/100

    //  M = P × ({[1 + i]^n – 1} / i) × (1 + i).

    let est = p * ((Math.pow((1 + i),n) - 1 )/ i) * (1 + i)
    let estNumber = parseInt(est,10)
    setEstimatedReturns(estNumber);
 };
//   const totalAmountHandler=()=>{
   
//     setTotalValue(estimatedReturns+sliderValue1);
//  };




  let iconStyles = { color: "#6DD3B9", fontSize: "2rem" };
  return (
    <div className="w-[100%] h-screen flex flex-row overflow-y-hidden">
      {/* dashborad navigator */}
      <div className="w-[20%] h-[100%]">
        <DashboardNav name={name}/>
      </div>
      {/* dashboard */}
      <div className="w-[80%] h-[100%] flex flex-col ">
        {/* navbar */}
        <div className=" flex flex-row justify-between items-center w-[100%] h-[6%] bg-[#eceff5] border-b-2 border-solid border-ternary-color px-12">
          {/* search bar */}
          <div className="flex w-[50%] h-[60%] items-center gap-4">
            <div className="w-[90%] h-[100%] rounded-[2rem] border-2 border-solid border-primary-blue">
              <input
                type="text"
                className="w-[100%] h-[100%] rounded-[2rem] text-center outline-primary-blue text-2xl"
                placeholder="Search"
              />
            </div>
            <AiOutlineSearch size={28} />
          </div>
          {/* notification icons */}
          <div className="flex gap-8">
            <BiBell size={26} />
            <GrMailOption size={26} />
          </div>
        </div>
        {/* wrapper */}
        <div className="w-[100%] h-[94%] flex flex-row">
          <div className="flex flex-col w-[80%] h-[100%] bg-white">
            {/* start here */}

            <div className="w-[100%] text-[4em] px-20 py-10  flex justify-center items-center">
                <p  className=" w-[29%]">SIP Calculator</p>
            </div>
  
        <div className="flex flex-row w-[100%] p-[5em] ">
            <div className="flex flex-col  w-[60%] h-[80vh] gap-[8em]  ">

     <div className="flex flex-col  w-[100%]   gap-[5em]">
                <div className="flex flex-row gap-6 w-[100%]">
                    <div className="flex flex-col gap-4 w-[60%]">
                        <div className="flex flex-row justify-between  items-center">
                             <p className="text-[1.5em] font-semibold">Monthly investment</p>
                             <p className="flex flex-row text-[2em] items-center text-[#6DD3B9] bg-[#EBF9F5] font-semibold" > <BiRupee style={iconStyles}/> {sliderValue1}</p>  
                        </div>

                        <div>
                            <input
                            type="range"
                            min="500"
                            max="100000"
                            value={sliderValue1}
                            onChange={handleSliderChange1}
                            className="w-[100%] h-[4px]"
                        />
                        </div>
                    </div>
              
             
                </div>

                <div className="flex flex-row gap-6 w-[100%] ">
                    <div className="flex flex-col gap-4 w-[60%]">
                        <div className="flex flex-row justify-between  items-center">
                             <p className="text-[1.5em] font-semibold">Expected Return Rate (p.a)</p>
                             <p className="flex flex-row text-[2em] items-center text-[#6DD3B9] bg-[#EBF9F5] font-semibold" > {sliderValue2} %</p>  
                        </div>

                        <div>
                            <input
                            type="range"
                            min="1"
                            max="30"
                            value={sliderValue2}
                            onChange={handleSliderChange2}
                            className="w-[100%] h-[4px]"
                        />
                        </div>
                    </div>
              
             
                </div>

                <div className="flex flex-row gap-6 w-[100%]">
                    <div className="flex flex-col gap-4 w-[60%]">
                        <div className="flex flex-row justify-between  items-center">
                             <p className="text-[1.5em] font-semibold">Time Period</p>
                             <p className="flex flex-row text-[2em] items-center text-[#6DD3B9] bg-[#EBF9F5] font-semibold" >  {sliderValue3} Yr</p>  
                        </div>

                        <div>
                            <input
                            type="range"
                            min="1"
                            max="50"
                            value={sliderValue3}
                            onChange={handleSliderChange3}
                            className="w-[100%] h-[4px]"
                        />
                        </div>
                    </div>
              
             
                </div>

                </div>
   <div className=" flex flex-col w-[100%]">
                <div className="flex flex-col w-[100%] gap-3">

                  <div className="flex flex-row justify-between w-[60%] text-[1.8em] items-center ">
                    <p>Invested amount</p>
                    <p className="flex flex-row justify-center items-center"> <BiRupee />{sliderValue1*sliderValue3*12}</p>
                  </div>


                  <div className="flex flex-row justify-between w-[60%] text-[1.8em] items-center ">
                    <p>Est. returns</p>
                    {/*  */}
                    <p className="flex flex-row justify-center items-center"> <BiRupee />{estimatedReturns}</p>
                  </div>
                  <div className="flex flex-row justify-between w-[60%] text-[1.8em] items-center ">
                    <p>Total value</p>
                    <p className="flex flex-row justify-center items-center"> <BiRupee />{estimatedReturns + (sliderValue1*sliderValue3*12)}</p>
                  </div>

                </div>
                </div>
            </div>


            <div className="w-[40%] ">
            <div className="w-[68%] ">
                    <CircularProgressbar value={estimatedReturns} maxValue={9648434}   styles={buildStyles({

    rotation: 0.25,


    strokeLinecap: 'butt',

 
    textSize: '16px',


    pathTransitionDuration: 0.5,




    pathColor: `#5367FF`,
  
    trailColor: '#EEF0FF',
   
  })} />
            </div>
            </div>
        </div>
          </div>

          {/* right bar */}
          <div className="w-[0.2%] h-[100%] mx-auto bg-primary-blue"></div>
          <div className="w-[23%] h-[100%] bg-[#eceff5] items-center flex flex-col justify-evenly ">

                
          <div className='w-[100%] h-[10%] flex items-center justify-center border-solid border-black'>
                            <p className='text-4xl '>Terms and Conditions</p>
                    </div>
                    <div className='w-[90%] h-[0.5%] rounded-full  bg-primary-blue'></div>
                

               <div className=" w-[90%]   flex flex-col  items-center gap-10 ">
                  
                  <div className=" flex flex-col gap-3 mt-4">
                <div className="bg-white rounded-xl box-shadow p-3">
                        <p className="text-3xl font-bold text-center">Accuracy of Information:</p>

                        <div className="text-xl font-semibold flex flex-col gap-4 ">
                            <li>The SIP Calculator is for informational purposes, estimating potential investment returns based on your input and assumptions.</li>
                            <li>Results from the calculator are estimates, not financial advice. Actual returns may vary due to market changes and other factors.</li>
                         
                        </div>

                 </div>
                  
                <div className="bg-white rounded-xl box-shadow p-3">
                        <p className="text-3xl font-bold text-center">User Responsibility:</p>

                        <div className="text-xl font-semibold flex flex-col gap-4 ">
                            <li>You are accountable for the accuracy of your input data, including the initial investment, SIP amount, return rate, and tenure.</li>
                            <li>The calculator is not a replacement for professional financial advice; consult a financial advisor before investing.</li>
                         
                        </div>

                 </div>
                <div className="bg-white rounded-xl box-shadow p-3">
                        <p className="text-3xl font-bold text-center">Market Risk:</p>

                        <div className="text-xl font-semibold flex flex-col gap-4 ">
                            <li>All investments carry a certain level of market risk. The calculator's results are based on the assumption of a constant rate of return, which may not reflect the real-world market conditions.</li>
              
                         
                        </div>

                 </div>
                 </div>

                   
               </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sip;
