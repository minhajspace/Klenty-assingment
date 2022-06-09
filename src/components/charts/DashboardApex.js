import React from 'react';
import Chart from 'react-apexcharts'


class ApixBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
                   columnWidth:30
                }
              },
              

        xaxis: {
          categories: ["Jan27,2020","Feb03,2020","Feb10,2020","Feb17,2020","Mar2,2020"]
        },
        

      },
      series: [{
        name: 'series-1',
        data: [170,50,230,170,180]
      }]
    }
  }
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={320} />
    )
  }
}

export default ApixBarChart