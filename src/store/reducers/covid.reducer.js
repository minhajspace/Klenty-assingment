
import {
   FETCH_COVID_RECORDS_START,
    FETCH_COVID_RECORDS_SUCCESS,
    FETCH_COVID_RECORDS_FAILED,
    FETCH_HOSPITAL_BEDS_START,
    FETCH_HOSPITAL_BEDS_SUCCESS,
    FETCH_HOSPITAL_BEDS_FAILED,
     FETCH_HISTORY_DATA_START,
    FETCH_HISTORY_DATA_SUCCESS,
    FETCH_HISTORY_DATA_FAILED,
}
from '../actionType'

const initialState = {
  covidDetails : [],
  isLoading : false,
  error : [],
  statewise: [],
  bedCounts : [],
  bedCountsregional :[],
  covidHistoryData :[]
 
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_RECORDS_START:
      return {
       ...state , 
       isLoading : true
      }
     case FETCH_COVID_RECORDS_SUCCESS:
      return {
       ...state , 
       isLoading : false,
       covidDetails : action.payload.total,
       statewise : action.payload.statewise

       
      }
      
    case FETCH_COVID_RECORDS_FAILED:
      return {
       ...state , 
       isLoading : false,
       error : action.payload
      }
     
      // Hospital Beds counts 
      case FETCH_HOSPITAL_BEDS_START:
      return {
       ...state , 
       isLoading : true
      }
     case FETCH_HOSPITAL_BEDS_SUCCESS:
      return {
       ...state , 
       isLoading : false,
       bedCounts : action.payload.summary,
       bedCountsregional : action.payload.regional

       
      }
      
    case FETCH_HOSPITAL_BEDS_FAILED:
      return {
       ...state , 
       isLoading : false,
       error : action.payload
      }

   




    default:
      return state
  }
}
