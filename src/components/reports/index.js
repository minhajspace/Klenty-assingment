import React,{useState,useEffect} from 'react'
import ApixBarChart from '../charts/DashboardApex'
import Donut from '../charts/ApexDonut'
import Line from '../charts/Line'
import Multiline from '../charts/MultiLine'
import HorizontalBar from '../charts/HorizontalBar'
import SelectInput from '../SelecteInput'
import SelectDateRangePicker from '../DateRangePicker'
import moment from 'moment'
import {fetchCovidData ,fetchHospitalsBeds} from '../../store/actions/covid.action'
import { useDispatch,useSelector } from 'react-redux'
import {lineGraph,filterOptions} from '../../constents/dummyData'



const styles = { width: 224, display: 'block', marginBottom: 10 }
const Reports = () => {
  const [startDate,setStartDate] = useState()
  const [endDate,setEndDate] = useState()
  const dispatch = useDispatch()
  const covidChartData = useSelector((state) => state.covid?.covidDetails)
  const statewise = useSelector((state) => state.covid?.statewise)
  const [filterDefaultValue,setFilterDefaultValue] = useState(statewise[0]?.state) 
  const [statewiseFilterData , setStateWiseFilterData] = useState(statewise)
  const [covedRecordsCound,setcovedRecordsCound] = useState("all") 
  const [hospitalsBeds,setHospitalBeds]= useState("totalBeds")
  const hospitalBedsCounts = useSelector((state)=> state.covid.bedCounts)
  const [historyFilter , setHistoryFilter] = useState(lineGraph[0].month) 
  
  
  

useEffect(()=>{
   dispatch(fetchCovidData())
   dispatch(fetchHospitalsBeds())
},[])

useEffect(()=>{
  setFilterDefaultValue(statewise[0]?.state)
  
},[statewise])

const getDonutSeries = (beds) => {
 return  beds === "totalBeds" ?  Object.values(hospitalBedsCounts) : [hospitalBedsCounts[beds]]
}

const getDonutlabel = (beds) => {
 return  beds === "totalBeds" ?  Object.keys(hospitalBedsCounts) : [beds]
}

const getStateWiseCategory = () => {
return  Object.keys(Object.assign({},statewise.filter(states => states.state === filterDefaultValue)[0])).filter(item => item !== "state")
}

const getStateWiseSeries = () => {
return  Object.values(Object.assign({},statewise.filter(states => states.state === filterDefaultValue)[0])).filter(item => Number(item))
}




    return <>
     <div className="d-flex mob-flex-col">
       <div className='main-heading'>
         <h2>Covid Tracking Report</h2>

       </div>
         <div className=' d-flex flex-col card w-50 mob-w100'>
             <div className='d-flex m-xl space-between'>
                    <div className='mob-mb-sm'>
                      <h4>Total india cases</h4>
                    </div>

                     <SelectInput
                      label="Select Status" 
                      stackedLabel
                      noLabel
                      labelStyle={{ fontSize: 12, border: "none" }}
                      inputOptions={{
                        style : styles,
                        menuStyle: { fontSize: '12px',width:"200px" },
                        searchable: false,
                        labelKey: "lable",
                        valueKey: "value",
                        // onClean: () => setTotalMattersStatus(null),
                        cleanable: false,
                        onChange: (value) => {
                          setcovedRecordsCound(value)
                        },
                         value: covedRecordsCound,
                         data: filterOptions
                      }}
                    />
                    
                   
                     
                 </div>
                 <div>
                   <ApixBarChart
                   categories = {covedRecordsCound === "all" ? Object.keys(covidChartData) : covedRecordsCound === "active" ? ["active"] : covedRecordsCound === "confirmed" ? ["confirmed"] : covedRecordsCound === "recovered" ? ["recovered"] : ["deaths"]}
                   series = {covedRecordsCound === "all" ? Object.values(covidChartData) : covedRecordsCound === "active" ? [covidChartData.active] : covedRecordsCound === "confirmed" ? [covidChartData.confirmed] : covedRecordsCound === "recovered" ? [covidChartData.recovered] : [covidChartData.deaths]}

                   /> 
                 </div>

         </div>
          <div className=' d-flex flex-col card w-50 mob-w100'>
             <div className='d-flex m-xl space-between'>
                   <h4 className='mob-mb-sm'>Statewise cases</h4>
                     <SelectInput
                      label="Select Status" 
                      stackedLabel
                      noLabel
                      labelStyle={{ fontSize: 12, border: "none" }}
                      inputOptions={{
                        style : styles,
                        menuStyle: { fontSize: '12px',width:"200px" },
                        searchable: false,
                        labelKey: "lable",
                        valueKey: "value",
                        cleanable: false,
                        onChange: (value) => {
                          
                          setFilterDefaultValue(value)
                      
                        },
                         value: filterDefaultValue,
                         data: statewise?.map((state) =>  ({lable : state.state , value : state.state}))
                      }}
                    />
                    {/* <SelectDateRangePicker /> */}
                     
                 </div>
                 <div>
                   <ApixBarChart
                   categories = {getStateWiseCategory()}
                   series = {getStateWiseSeries()}
                   /> 
                 </div>

         </div>
         <div className=' d-flex flex-col card w-50 mob-w100'>
             <div className='d-flex m-xl space-between'>
                    <div className='mob-mb-sm'>
                      <h4>Total beds avalibale</h4>
                    </div>
                     <SelectInput
                      label="Select Status" 
                      stackedLabel
                      noLabel
                      labelStyle={{ fontSize: 12, border: "none" }}
                      inputOptions={{
                        style : styles,
                        menuStyle: { fontSize: '12px',width:"200px" },
                        searchable: false,
                        labelKey: "lable",
                        valueKey: "value",
                        // onClean: () => setTotalMattersStatus(null),
                        cleanable: false,
                        onChange: (value) => {
                          setHospitalBeds(value)
                        },
                         value: hospitalsBeds,
                         data: Object.keys(hospitalBedsCounts).map(item => ({lable : item , value : item}))
                      }}
                    />
                    
                   
                     
                 </div>
                 <div className='d-flex justify-center mt-xxl'>
                  

                   <Donut
                   labels={getDonutlabel(hospitalsBeds)}
                   series={getDonutSeries(hospitalsBeds)}
                   />
                 </div>

         </div>
         <div className=' d-flex flex-col card w-50 mob-w100'>
             <div className='d-flex m-xl space-between'>
                    <div className='mob-mb-sm'>
                      <h4>Total cases month wise</h4>
                    </div>
                     <SelectInput
                      label="Select Status" 
                      stackedLabel
                      noLabel
                      labelStyle={{ fontSize: 12, border: "none" }}
                      inputOptions={{
                        style : styles,
                        menuStyle: { fontSize: '12px',width:"200px" },
                        searchable: false,
                        labelKey: "lable",
                        valueKey: "value",
                        // onClean: () => setTotalMattersStatus(null),
                        cleanable: false,
                        onChange: (value) => {
                          setHistoryFilter(value)
                        },
                         value: historyFilter,
                         data: lineGraph.map(item => ({lable : item.month , value : item.month}))
                      }}
                    />
                    
                   
                     
                 </div>
                 <div>
                   <Multiline
                   labels= {[historyFilter]}
                   series= {Object.assign({},lineGraph.filter(item => item.month === historyFilter)[0])}
                   /> 
                 </div>

         </div>
         
         
     
    </div>
    </>
}
export default Reports