import React from 'react';
import Chart from 'react-apexcharts'

const BarChart = ({categories,series,height=300 ,horizontalView=false}) =>  {
     const state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
         stroke: {
                   
              },
        colors: ["#1B435D"],

          fill: {
            type: 'gradient',
             gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ["#1B435D"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0.5,
            stops: [0, 100]
          }
        },

        plotOptions: {
                bar: {
                  borderRadius: 5,
                  width: 0.5,
                   columnWidth:30,
                   horizontal: horizontalView,
                   dataLabels: {
                    position: 'top', // top, center, bottom
                   
                  },
                }
              },
               dataLabels: {
                 horizontal: horizontalView,
                enabled: true,
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#1B435D"]
                }
              },
              

        xaxis: {
          categories: categories  || ["Jan27,2020","Feb03,2020","Feb10,2020","Feb17,2020","Mar2,2020"]
        },
      },
      series: [{
        name: 'series-1',
        data: series || [170,50,230,170,180]
      }]
    }
  
    return (
      <Chart options={state.options} series={state.series} type="bar" width={"100%"} height={height} maxWidth={300} />
    )
  
}

export default BarChart