import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const updataWriterList=(data)=>({
    type:constants.UPDATA_WRITER_LIST,
    data:fromJS(data.writerList),
    totalPage:Math.ceil(data.writerList.length/5)
})

export const updataTopicList=(data)=>({
    type:constants.UPDATA_TOPIC_LIST,
    data:fromJS(data.topicList)
})

export const updataBoardList=(data)=>({
    type:constants.UPDATA_BOARD_LIST,
    data:fromJS(data.boardList)
})

export const updataHomeList=(data)=>({
    type:constants.UPDATA_HOME_LIST,
    data:fromJS(data.listArr)
})


export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('./api/homeData.json').then((res)=>{
            let data = res.data.data;
            dispatch(updataWriterList(data))
            dispatch(updataTopicList(data))
            dispatch(updataBoardList(data))
            dispatch(updataHomeList(data))
        })
        
    }
}

export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
    
})