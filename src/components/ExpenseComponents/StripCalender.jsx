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
        <div>
         <Calendar
                onChange={onChange}
                value={date}
                calendarType="US"
                oneWeekCalendar={true}
              />
        </div>
      );
    
}

export default StripCalender
