import React from 'react';
import {PieChart}  from "@rsuite/charts";
//import BarChart from "@rsuite/charts/lib/charts/BarChart";



const DashboardRsuite = () => {
    const data = [["00:00", "10:00"], ["01:00", "20:20"]];
    const colors  = [ '#34c3ff','#1464AC'];
    //const data = [20,60,20]

  return <>
     <PieChart
    data={data}
    donut
    color={colors}
  />
     <div className="App">
      <h1>horizontal BarChart name reversed</h1>
      source data: [[1, 122], [2, 12]]
      {/* <BarChart data={[[1, 122], [2, 12]]} horizontal /> */}
    </div>
    
   </>
}
export default DashboardRsuite