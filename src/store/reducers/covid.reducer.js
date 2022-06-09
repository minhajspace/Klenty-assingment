
import {FETCH_COVID_RECORDS_START,FETCH_COVID_RECORDS_SUCCESS,FETCH_COVID_RECORDS_FAILED} from '../actionType'

const initialState = {
  covidDetails : [],
  isLoading : false,
  error : [],
  statewise: []
 
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
     

    default:
      return state
  }
}
