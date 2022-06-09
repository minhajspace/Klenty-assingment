import React, { Component } from 'react';
import Chart from 'react-apexcharts'

const Donut = ({labels,series,height=300}) => {

 
   const state = {
      options: {
        labels: labels || ['Stat1', 'Stat2', 'Stat3',],
      },
      series: series|| [33,33,34]
  }

  

    return (
      <div className="donut">
        <Chart options={state.options} series={state.series} type="donut" width="350"  height={height} />
      </div>
    );
  
}

export default Donut;
