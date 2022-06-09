import React from 'react';
import Chart from 'react-apexcharts'


class HorizontalBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
         stroke: {
                   
              },
        colors: ['#1B435D'],
        plotOptions: {
                bar: {
                  borderRadius: 5,
                  width: 0.5,
                  rowWidth:30,
                  horizontal: true,
                  columnWidth: '70%',
                  barHeight: '30%',
                }
              },
              

        xaxis: {
          categories: ["Jan27,2020","Feb03,2020","Feb10,2020",]
        },
        

      },
      series: [{
        name: 'series-1',
        data: [170,50,230]
      }]
    }
  }
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={350} />
    )
  }
}

export default HorizontalBar