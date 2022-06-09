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
const data = [
    {
        lable : "all",
        value : "all"
    },
    {
        lable : "active",
        value : "active"
    },
    {
        lable : "confirmed",
        value : "confirmed"
    },
    {
        lable : "recovered",
        value : "recovered"
    },
      {
        lable : "deaths",
        value : "deaths"
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
   const [covedRecordsCound,setcovedRecordsCound] = useState("all") 
  
  
  

useEffect(()=>{
   dispatch(fetchCovidData())
   dispatch(fetchHospitalsBeds())
},[])





console.log("covidChartData===",useSelector((state)=> state))



    return <>
     <div className="d-flex mob-flex-col">
         <div className=' d-flex flex-col card w-50 mob-w100'>
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
                          setcovedRecordsCound(value)
                        },
                         value: covedRecordsCound,
                         data: data
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