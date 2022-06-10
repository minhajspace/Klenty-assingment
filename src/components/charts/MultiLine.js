import React, { Component } from 'react';
import Chart from 'react-apexcharts'

const MultilineChart  = ({labels ,series ,height=300}) =>  {
  const state = {
          
            series: [{
              name: 'Active',
              type: 'line',
              data: series.total.active
            },
             {
              name: 'Confirmed',
              type: 'line',
              data: series.total.confirmed
            },
             {
              name: 'Recovered',
              type: 'line',
              data: series.total.recovered
            },
             {
              name: 'Death',
              type: 'line',
              data: series.total.death
            }
          ],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              colors:["#03243E","#ff8000","#336600","#cc0000"],
              stroke: {
                curve: 'smooth',
                width:2
               
              },
              fill: {
                type:'solid',
                colors:["#E6FBFF","#032540"],


              },
              labels: labels,
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
        




    return (
      <div className="line">
        <Chart options={state.options} series={state.series} type="line" width="100%" height={height} />
      </div>
    );
  }


export default MultilineChart;
