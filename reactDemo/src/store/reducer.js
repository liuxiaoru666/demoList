import {CHANGE_INPUT_VALUE,ADD_ITEM,DELET_ITEM,INIT_LIST_ACTION} from './actiontype'
//仓库数据
const defaultState = {
    inputValue:'',
    listArr:[]
};
//reducer 可以接收state,不可以修改state
export default (state = defaultState,action)=>{
    //state： store上一次存的数据
    //action:参数
    
    if(action.type===CHANGE_INPUT_VALUE){
        const newState =JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }


    if(action.type===ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.listArr.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type===DELET_ITEM){
        const newState =  JSON.parse(JSON.stringify(state));
        newState.listArr.splice(action.index,1);
        return newState;
    }

    if(action.type===INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.listArr = action.data;
        return newState;
    }

    return state;
}