import React from "react";
import Chart from 'react-apexcharts'

const Graph = ({ dataArr }) => {
  return (
    <React.Fragment>
      <Chart
        type="area"
        width={"100%"}
        height={"100%"}
        series={
          [
            {
              data: dataArr
            }
          ]
        }
        options={{

          title: {
            text: "Spendings",
            style: { fontSize: 28 },

          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          dataLabels: {
            enabled: false
          },
          xaxis:{
            tickAmount:6
          }
        }}

      >

      </Chart>
    </React.Fragment>
  )
}

export default Graph
