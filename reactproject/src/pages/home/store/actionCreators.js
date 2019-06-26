import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const updataWriterList=(data)=>({
    type:constants.UPDATA_WRITER_LIST,
    data:fromJS(data.writerList),
    totalPage:Math.ceil(data.writerList.length/5)
})

export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('./api/homeData.json').then((res)=>{
            dispatch(updataWriterList(res.data.data))
        })
        
    }
}

export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
    
})