import React from "react";
import Chart from 'react-apexcharts'

const Graph = () => {
  return (
    <React.Fragment>
      <Chart
        type="area"
        width={"100%"}
        height={"100%"}
        series={
            [
                {
                   
                    data:[345,27,121,678,98,321]
                }
            ]
        }
        options={{
            title:{
                text:"Spendings",
                style:{fontSize:28}
            },
        }}
        
      >

      </Chart>
    </React.Fragment>
  )
}

export default Graph
