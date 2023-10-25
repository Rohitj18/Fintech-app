import React from "react";
import Chart from 'react-apexcharts'

const PieChart = ({allExpense}) => {
    // setAllExpnese([expenseobject.foodSum,expenseobject.Electronicsum,expenseobject.healthsum,expenseobject.travelsum,expenseobject.grocerySum,expenseobject.othersum]);
  return (
    <React.Fragment>
      <Chart
        type="pie"
        width={"100%"}
        height={"100%"}
        series={allExpense}
        options = {{
            labels: ['Food', 'Electronics', 'Health', 'Travel','Grocery',"Others"]
        }}

      >

      </Chart>
    </React.Fragment>
  )
}

export default PieChart
