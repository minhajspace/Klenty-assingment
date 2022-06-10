import React from 'react';
import Chart from 'react-apexcharts'

const DonutChart = ({labels,series,height=300 ,innerWidth = "65%" ,intensity = 0.65}) => {

 
  const state =  {
      plotOptions: {
        pie: {
          donut: {
            size: innerWidth
          }
        }
      },
      chart: {
        type: "donut",
        width: '100%',
        fontSize : "12px",
      },
      dataLabels: {
        enabled: true,
        style : {
          fontSize: "10px",
          colors: ['#292d3f'],
        },
        dropShadow: {
          enabled: false,
        },
        formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex]
        },
      },
      noData: {
        text: 'No results found, please select different filters',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#575757",
          fontSize: '14px',
          fontFamily: undefined
        }
      },
      tooltip: {
        style: {
          fontSize: "14px"
        }
      },
      options : {
        legend: {
        show: true,
        position: 'bottom',
      },
        labels: labels ? labels : [],
        

      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: true,
          color:'#01afe1',// getColor(), //(user && user.branding && user.branding.primaryColor) ? user.branding.primaryColor : '#085490',
          shadeTo: "light",
          shadeIntensity: intensity,
        },
      },
      series :series
      

    }
    
    
  
  

    return (
      <div className="donut">
        <Chart options={state.options} series={state.series} type="donut" width="350"  height={height} />
      </div>
    );
  
}

export default DonutChart;
