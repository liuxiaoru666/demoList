
//统一管理action


import {CHANGE_INPUT_VALUE,ADD_ITEM,DELET_ITEM} from './actiontype';

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    inputValue:value
})

export const getAddItemAction = (value)=>({
    type:ADD_ITEM
})

export const getDeletItemAction=(value)=>({
    type:DELET_ITEM,
    index:value
})