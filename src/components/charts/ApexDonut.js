import React, { Component } from 'react';
import Chart from 'react-apexcharts'

const Donut = ({labels,series}) => {

 
   const state = {
      options: {
        labels: labels || ['Stat1', 'Stat2', 'Stat3',],
        colors:["#085490","#5EABC5","#B3DDEB"],
      },
      series: series|| [33,33,34]
  }

  

    return (
      <div className="donut">
        <Chart options={state.options} series={state.series} type="donut" width="380" />
      </div>
    );
  
}

export default Donut;
