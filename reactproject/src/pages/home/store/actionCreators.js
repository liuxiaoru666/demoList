import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const updataHomeData=(data)=>({
    type:constants.UPDATA_HOME_DATA,
    data:data,
    totalPage:Math.ceil(data.writerList.length/5)
})


export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('./api/homeData.json').then((res)=>{
            let data = res.data.data;
            dispatch(updataHomeData(data))
        })
    }
}

export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
    
})


export const addHomeList=(data)=>({
    type:constants.ADD_HOME_LIST,
    data:fromJS(data)
})
export const loadMore=()=>{
 return (dispatch)=>{
    axios.get('./api/homeList.json').then((res)=>{
        dispatch(addHomeList(res.data.listArr))
    })
 }
}