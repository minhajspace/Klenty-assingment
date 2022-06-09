import React,{useState,useEffect} from 'react'
import ApixBarChart from '../charts/DashboardApex'
import Donut from '../charts/ApexDonut'
import Line from '../charts/Line'
import Multiline from '../charts/MultiLine'
import HorizontalBar from '../charts/HorizontalBar'
import SelectInput from '../SelecteInput'
import SelectDateRangePicker from '../DateRangePicker'
import moment from 'moment'
import {fetchCovidData} from '../../store/actions/covid.action'
import { useDispatch,useSelector } from 'react-redux'
const data = [
    {
        lable : "Active",
        value : "Active"
    },
    {
        lable : "Active",
        value : "Active"
    },
    {
        lable : "Active",
        value : "Active"
    },
]



const styles = { width: 224, display: 'block', marginBottom: 10 }
const Reports = () => {
  const [startDate,setStartDate] = useState()
  const [endDate,setEndDate] = useState()
  const dispatch = useDispatch()
  const covidChartData = useSelector((state) => state.covid?.covidDetails)
  const statewise = useSelector((state) => state.covid?.statewise)
  const [filterDefaultValue,setFilterDefaultValue] = useState("Maharashtra") 
  const [statewiseFilterData , setStateWiseFilterData] = useState(statewise)
  
  

useEffect(()=>{
   dispatch(fetchCovidData())
},[])





console.log("statewise===",Object.assign({},statewise.filter(states => states.state === filterDefaultValue)[0]))



    return <>
     <div className="d-flex ">
         <div className=' d-flex flex-col card w-50'>
             <div className='d-flex m-xl space-between'>
                    <div>
                      <h4>Total India Cases</h4>
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
                          //onFilterChange(value,setTotalMattersStatus)
                        //   handleFilterChangeSingleSelect([value], setTotalMattersStatus, totalMattersStatus, defaultMatterArtefact)
                        },
                        // value: totalMattersStatus[0],
                         data: data
                      }}
                    />
                    {/* <SelectDateRangePicker
                      label="Select Date Range"
                      noLabel
                      styles={{ height: "30px", border: "none",width:'200px' }}
                      labelStyle={{ fontSize: "10px" }}
                      inputOptions={{
                        value:  startDate && endDate ?  [startDate , endDate]  : [] ,
                        size: "xs",
                        placeholder: "Start Date - End Date",
                        ranges: [],
                        onChange: (value) => {
                          console.log("value===",value)
                          setStartDate(moment(value[0]).format("yyyy-MM-dd HH:mm:ss"));
                          setEndDate(moment(value[1]).format("yyyy-MM-dd HH:mm:ss"));
                        },
                        onOk: (value) => {
                          console.log("value===",value)
                          setStartDate(moment(value[0]).format("yyyy-MM-dd HH:mm:ss"));
                          setEndDate(moment(value[1]).format("yyyy-MM-dd HH:mm:ss"));
                        },
                        onClean: () => {
                          setStartDate(null)
                          endDate(null)
                        }
                      }}
                    /> */}
                   
                     
                 </div>
                 <div>
                   <ApixBarChart
                   categories = {Object.keys(covidChartData)}
                   series = {Object.values(covidChartData)}

                   /> 
                 </div>

         </div>
          <div className=' d-flex flex-col card w-50'>
             <div className='d-flex m-xl space-between'>
                   <h4>Statewise  Cases</h4>
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
                   categories = {Object.keys(Object.assign({},statewise.filter(states => states.state === filterDefaultValue)[0]))}
                   series = {Object.values(Object.assign({},statewise.filter(states => states.state === filterDefaultValue)[0]))}
                   /> 
                 </div>

         </div>
         {/* <div className='flex-1 d-flex flex-col card'>
             <div className='d-flex'>
                 <div>
                     <SelectInput
                     
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
                          //onFilterChange(value,setTotalMattersStatus)
                        //   handleFilterChangeSingleSelect([value], setTotalMattersStatus, totalMattersStatus, defaultMatterArtefact)
                        },
                        // value: totalMattersStatus[0],
                         data: data
                      }}
                    />

                 </div>
                 <div>
                     <SelectDateRangePicker />

                 </div>
                     
                    
                     

                 </div>
             <div>
                <ApixBarChart/> 
             </div>

         </div> */}
         
     
    </div>
    </>
}
export default Reports