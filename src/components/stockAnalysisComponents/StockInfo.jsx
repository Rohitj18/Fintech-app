import React from 'react'
import { useEffect, useState } from 'react';
import { StockData } from '../data/datapoints';
import Graph from '../DashboardComponents/Graph';
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import Spinner from '../Common/Spinner';
const StockInfo = ({stockName}) => {
  const [oneYearbtn, setOneYearBtn] = useState(true);
  const [threeYearbtn, setThreeYearBtn] = useState(false);
  const [fiveYearbtn, setFiveYearBtn] = useState(false);
  const [load, setLoad] = useState(true);
  const [graphArr, setGraphArr] = useState([]);
  const [pageData, setPageData] = useState({});
  const [fullStockData,setFullStockData] = useState({});
  const [yearkeys,setYearKeys] = useState([]);
  const buttonHanlder = async (e) => {

    const id = e.currentTarget.id;
    setLoad(true);
    if (id === "1") {
      setOneYearBtn(true);
      setThreeYearBtn(false);
      setFiveYearBtn(false);
      fetchYearWiseData(1);
      
    } else if (id === "2") {
      
      setOneYearBtn(false);
      setThreeYearBtn(true);
      setFiveYearBtn(false);
      fetchYearWiseData(3);

    } else if (id === "3") {
     
      setOneYearBtn(false);
      setThreeYearBtn(false);
      setFiveYearBtn(true);
      fetchYearWiseData(5);
    }
    setLoad(false);
  }

  const fetchYearWiseData=(yrs=1)=>{
    const date = new Date();
    const condition = date.getFullYear()-yrs;
    let arr = [];
    let i = 0;
    while (i < yearkeys.length) {
      if (Number(yearkeys[i].substring(0, 4)) < condition) {
        break;
      }
      if(i%15===0){
        arr.push(StockData["Time Series (Daily)"][yearkeys[i]]["2. high"]);
      }
      i++;
    }
    arr.reverse();
    setGraphArr(arr);
  }
  const fetchData = async () => {
    //const stockData = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&outputsize=full&apikey=CYUQ1GFIPA075SOW`);
    setFullStockData(StockData['Time Series (Daily)']);
    const year_keys = Object.keys(StockData['Time Series (Daily)']);
    setYearKeys(year_keys);
    let arr = [];
    const date = new Date();
    const condition = date.getFullYear() - 1;
    setPageData(StockData['Time Series (Daily)'][year_keys[0]]);
    let i = 0;
    while (i < year_keys.length) {
      if (Number(year_keys[i].substring(0, 4)) < condition) {
        break;
      }
      if(i%15===0){
        arr.push(StockData["Time Series (Daily)"][year_keys[i]]["2. high"]);
      }
      i++;
    }
    arr.reverse();
    setGraphArr(arr);
  }

  useEffect(() => {
    setLoad(true);
    fetchData();
    setLoad(false);
  }, []);

  return (
    <div key={stockName} className='w-[100%] h-[100%] flex flex-col'>
      <div className='w-[100%] h-[8%] bg-white flex flex-row items-center'>
        <div className='w-[1%] h-[100%] bg-primary-blue'>
        </div>
        <p className='text-5xl font-bold px-5'>COMPANY : {stockName}</p>
      </div>
      <div className='w-[100%] h-[10%]  flex gap-5 items-center pl-5'>
        <div className='w-[10%] h-[50%]'><button id="1" className={`${oneYearbtn ? "bg-primary-blue text-white" : "bg-white text-black"} transition-all duration-100 ease-in-out hover:bg-primary-blue hover:text-white  w-[100%] h-[100%] flex justify-center items-center rounded-lg text-xl`} onClick={buttonHanlder}>1 Year</button></div>
        <div className='w-[10%] h-[50%]'><button id="2" className={`${threeYearbtn ? "bg-primary-blue text-white" : "bg-white text-black"} transition-all duration-100 ease-in-out hover:bg-primary-blue hover:text-white w-[100%] h-[100%] flex justify-center items-center rounded-lg text-xl`} onClick={buttonHanlder}>3 Year</button></div>
        <div className='w-[10%] h-[50%]'><button id="3" className={`${fiveYearbtn ? "bg-primary-blue text-white" : "bg-white text-black"}  transition-all duration-100 ease-in-out hover:bg-primary-blue hover:text-white w-[100%] h-[100%] flex justify-center items-center rounded-lg text-xl`} onClick={buttonHanlder}>5 Year</button></div>
      </div>
      <div className='w-[100%] h-[43%] flex justify-center items-center relative'>
        <div className={`${load?"visible":"invisible"} w-[100%] h-[100%] absolute z-10 flex justify-center items-center`}><Spinner/></div>
        <div className={`${load?"invisible":""} w-[100%] h-[100%]`}><Graph dataArr={graphArr} /></div>
      </div>
      <div className='w-[100%] h-[39%] bg-white flex flex-col'>
        <div className='flex w-[100%] h-[25%] border-b-2  justify-center items-center gap-10'>
          <div className='w-[20%] h-[70%] bg-red-500 flex gap-3 justify-center items-center'>
            <button className='text-3xl font-semibold text-white'>BUY</button>
            <AiOutlineDollarCircle size={23} />
          </div>
          <div className='w-[20%] h-[70%] bg-green-500 flex gap-3 justify-center items-center'>
            <button className='text-3xl font-semibold text-white'>SELL</button>
            <MdOutlineSell size={23} />
          </div>
        </div>
        <div className='flex w-[100%] h-[75%]'>
          <div className='flex flex-col w-[50%] h-[100%] px-10 border-r-2'>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[30%]'>
              <div className='w-[30%]'><p className='text-3xl w-[100%] h-[100%]'>Open</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["1. open"]).toFixed(2)} ₹
              </div>
            </div>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[30%]'>
              <div className='w-[30%]'><p className='text-3xl w-[100%] h-[100%]'>High</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["2. high"]).toFixed(2)} ₹
              </div>
            </div>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[30%]'>
              <div className='w-[30%]'><p className='text-3xl w-[100%] h-[100%]'>Low</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["3. low"]).toFixed(2)} ₹
              </div>
            </div>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[30%]'>
              <div className='w-[30%]'><p className='text-3xl w-[100%] h-[100%]'>Close</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["4. close"]).toFixed(2)} ₹
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[50%] h-[100%] px-10'>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[10%]'>
              <div className='w-[50%]'><p className='text-3xl w-[100%] h-[100%]'>Adjusted Close</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["5. adjusted close"]).toFixed(2)} ₹
              </div>
            </div>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[30%]'>
              <div className='w-[30%]'><p className='text-3xl w-[100%] h-[100%]'>Volume</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {parseInt(Number(pageData["6. volume"]) / 100, 10)}K
              </div>
            </div>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[10%]'>
              <div className='w-[50%]'><p className='text-3xl w-[100%] h-[100%]'>Dividend Amount</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["7. dividend amount"]).toFixed(2)} ₹
              </div>
            </div>
            <div className='w-[100%] h-[24.75%] flex justify-center items-center gap-[10%]'>
              <div className='w-[50%]'><p className='text-3xl w-[100%] h-[100%]'>Split Coefficient</p></div>
              <div className='w-[30%] h-[60%] bg-[#eceff5] flex justify-center items-center text-2xl rounded-lg'>
                {Number(pageData["8. split coefficient"]).toFixed(2)} ₹
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StockInfo
