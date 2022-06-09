import axios from 'axios'
import {
    FETCH_COVID_RECORDS_START,
    FETCH_COVID_RECORDS_SUCCESS,
    FETCH_COVID_RECORDS_FAILED,
    FETCH_HOSPITAL_BEDS_START,
    FETCH_HOSPITAL_BEDS_SUCCESS,
    FETCH_HOSPITAL_BEDS_FAILED,
    FETCH_HISTORY_DATA_START,
    FETCH_HISTORY_DATA_SUCCESS,
    FETCH_HISTORY_DATA_FAILED
} from '../actionType'

export function   fetchHospitalsBeds(page,params){
    return  async (dispatch) => {
        dispatch({type:FETCH_HOSPITAL_BEDS_START})
     try{
      const response =await axios.get(`https://api.rootnet.in/covid19-in/hospitals/beds `)
      dispatch({type:FETCH_HOSPITAL_BEDS_SUCCESS,payload:response.data.data})
     }catch(err){ 
      dispatch({type:FETCH_HOSPITAL_BEDS_FAILED,err:err.response.data})
     }
    }
}


export function fetchCovidData (page,params){
    return  async (dispatch) => {
        dispatch({type:FETCH_COVID_RECORDS_START})
     try{
      const response =await axios.get(`https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise`)
      dispatch({type:FETCH_COVID_RECORDS_SUCCESS,payload:response.data.data})
     }catch(err){ 
      dispatch({type:FETCH_COVID_RECORDS_FAILED,err:err.response.data})
     }
    }
}

export function fetchHistoryData (page,params){
    return  async (dispatch) => {
        dispatch({type:FETCH_HOSPITAL_BEDS_START})
     try{
      const response =await axios.get(`https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history`)
      dispatch({type:FETCH_HISTORY_DATA_SUCCESS,payload:response.data.data})
     
     }catch(err){ 
      dispatch({type:FETCH_HISTORY_DATA_FAILED,err:err.response.data})
     }
    }
}