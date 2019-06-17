
import axios from 'axios';
//统一管理action


import {CHANGE_INPUT_VALUE,ADD_ITEM,DELET_ITEM,INIT_LIST_ACTION} from './actiontype';
import store from '.';

export const getInputChangeAction=(inputValue)=>({
    type:CHANGE_INPUT_VALUE,
    inputValue:inputValue
})

export const getAddItemAction = (value)=>({
    type:ADD_ITEM
})

export const getDeletItemAction=(index)=>({
    type:DELET_ITEM,
    index:index
})

export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data:data
})

//异步请求
//redux-thunk让action可以返回一个函数，发送给store
//获取数据，dispatch改变数据
export const getToduList = ()=>{
    return(dispatch)=>{
        axios.get('../list.json').then(res=>{
            const data = res.data;
            dispatch(initListAction(data));
        }) 
    }
}