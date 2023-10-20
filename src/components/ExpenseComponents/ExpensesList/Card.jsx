import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
// import { toast } from 'react-toastify';
import { BiRupee } from 'react-icons/bi'

const Card = ({expense}) => {
  
  let iconStyles = { color: "black", fontSize: '18px' };
    
  return (
    <div className=' w-[85%] flex flex-col  bg-bgDark bg-opacity-80 rounded-md border-b-2 bg-white border-primary-blue box-shadow3 mx-auto'>
      
        

        <div className=' flex flex-row gap-2  text-2xl font-medium justify-between  pt-[0.2em] pb-[0.2em] pl-[1em] pr-[1em]'>
            {/* <p className="text-black font-semibold text-2xl leading-6">{course.title}</p> */}
            <p className='mt-2 text-black'>
                   {expense.name}
            </p>
            <p className='mt-2 text-black flex flex-row items-center justify-center bg-[#eceff5] w-[4em] h-[2em] rounded-xl'>
                  <div><BiRupee style={iconStyles}/></div>
                  <div>{expense.amount}</div> 
            </p>
        </div>
        <div className='pt-[0.2em] pb-[0.2em] pl-[1em] pr-[1em] text-2xl flex items-center mb-2'>
          <p className='font-semibold'>Description : </p>
          <p className='pl-2 text-ternary-color'>{expense.desc}</p>
          
        </div>
      
    </div>
  )
}

export default Card
