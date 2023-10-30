import React from 'react'
import Card from './Card';
// import { useState } from 'react';

const Cards = (props) => {

    let expensesArr = props.expensesArr
    // let setExpensesArr = props.setExpensesArr
    


  return (
    <div className="flex flex-col gap-4 mb-4 w-[100%] h-[100%] overflow-y-scroll ">
      <div className='flex flex-row gap-2  text-3xl font-bold justify-between  pt-[0.2em] pb-[0.2em] pl-[1em] pr-[1em] ml-[3em] mr-[3em]'>
        <p>Items</p>
        <p>Price</p>
      </div>
      {
        
        expensesArr.map( (expense) => (
            <Card 
            expense={expense}        
            />
        ))
      }
    </div>
  )
}

export default Cards