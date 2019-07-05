import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';


const updataDetail=(title,content)=>({
    type:constants.UPDATA_DETAIL,
    title:title,
    content:content
})

export const getDetailData=()=>{
    return(dispatch)=>{
        axios.get('/api/detailData.json').then(res=>{
            const data = res.data.data;
            dispatch(updataDetail(data.title,data.content))
        }).catch((err)=>{})

    }
}