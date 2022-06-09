import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Multiline extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
            series: [{
              name: '',
              type: 'line',
              data: [0,80,200,130,180]
            }, {
              name: '',
              type: 'line',
              data: [190,40,260,190,200]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              colors:["#03243E","#E6FBFF"],
              stroke: {
                curve: 'smooth',
                width:2
               
              },
              fill: {
                type:'solid',
                colors:["#E6FBFF","#032540"],


              },
              labels: ["Jan27,2020","Feb03,2020","Feb10,2020","Feb17,2020","Mar2,2020"],
              markers: {
                size: 0
              },
              yaxis: [
                {
                  title: {
                    text: '',
                  },
                },
                {
                  opposite: true,
                  title: {
                    text: '',
                  },
                },
              ],
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if(typeof y !== "undefined") {
                      return  y.toFixed(0) + " points";
                    }
                    return y;
                  }
                }
              }
            },
          
          
          };
        }


  render() {

    return (
      <div className="line">
        <Chart options={this.state.options} series={this.state.series} type="line" width="500" />
      </div>
    );
  }
}

export default Multiline;
