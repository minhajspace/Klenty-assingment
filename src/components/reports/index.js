import React from 'react'
import ApixBarChart from '../charts/DashboardApex'
import Donut from '../charts/ApexDonut'
import Line from '../charts/Line'
import Multiline from '../charts/MultiLine'
import HorizontalBar from '../charts/HorizontalBar'
import SelectInput from '../SelecteInput'
import SelectDateRangePicker from '../DateRangePicker'

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
    return <>
     <div className="d-flex ">
         <div className='flex-1 d-flex flex-col card '>
             <div className='d-flex'>
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
                     
                    

                 </div>
                 <div>
                   <ApixBarChart/> 
                 </div>

         </div>
         <div className='flex-1 d-flex flex-col card'>
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

         </div>
         
     
    </div>
    </>
}
export default Reports