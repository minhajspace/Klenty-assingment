import axios from 'axios'
import {FETCH_COVID_RECORDS_START,FETCH_COVID_RECORDS_SUCCESS,FETCH_COVID_RECORDS_FAILED} from '../actionType'

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