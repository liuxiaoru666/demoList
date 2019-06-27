import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';


const updataDetail=(data)=>({
    tyle:constants.UPDATA_DETAIL,
    data:data
})

export const getDetailData=()=>{
    return(dispatch)=>{
        
    }
}