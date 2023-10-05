import React from "react";
import { useState } from "react";
import Calendar from 'short-react-calendar'




const StripCalender = () => {
    
    
      
      const [date,setDate] = useState(new Date());
      const onChange = (date) =>{
        setDate(date);
        console.log(date);
      };
      
      return (
        <div className=" flex justify-center items-center mt-[2em] w-[100%] h-[85%] box-shadow rounded-2xl">
         <Calendar
             className="w-[100%] text-xl font-bold h-[100%] border-none"
                onChange={onChange}
                value={date}
                calendarType="US"
                oneWeekCalendar={true}
              />
        </div>
      );
    
}

export default StripCalender
