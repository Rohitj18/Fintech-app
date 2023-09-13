import React from "react";
import { Datepicker, DatepickerEvent} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { useState } from "react";




const StripCalender = () => {
    const [date, setDate] = useState({
        startValue: Date.now(),
        endValue: Date.now()+10,
        rangeDates: [],
      });
    
      const handleChange = (d) => {
        const [startValue, endValue, rangeDates] = d;
        setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
      };
    
      return (
        <Datepicker
          onChange={handleChange}
          locale={enUS}
          startValue={date.startValue}
          endValue={date.endValue}
          
        />
      );
    
}

export default StripCalender
