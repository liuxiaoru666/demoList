import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const updataWriterList=(data)=>({
    type:constants.UPDATA_WRITER_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/5)
})

export const getWriterList = ()=>{
    return (dispatch)=>{
        axios.get('./api/writerList.json').then((res)=>{
            dispatch(updataWriterList(res.data.data))
        })
        
    }
}

export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
    
})