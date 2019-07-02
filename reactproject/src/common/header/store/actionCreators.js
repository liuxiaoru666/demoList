
import * as constants  from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';
export const searchFocus = ()=>({
    type:constants.SEARCH_FOCUS

});

export const searchBlur = ()=>({
    type:constants.SEARCH_BLUR

});

export const mouseEnter=()=>({
    type:constants.MOUSE_ENTER
})

export const mouseLeace=()=>({
    type:constants.MOUSE_LEACE
})

export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
})


//不需要导出，actionCreator自己调用
const updataList = (data)=>({
    type:constants.UPDATE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

//redux-thunk发起异步请求
export const getListData=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data.data;
            dispatch(updataList(data))
        }).catch((error=>{
            console.log(error)
        }))
    }
}






