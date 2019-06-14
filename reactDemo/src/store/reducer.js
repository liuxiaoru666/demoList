
//仓库数据
const defaultState = {
    inputValue:'',
    listArr:[]
};
//reducer 可以接收state,不可以修改state
export default (state = defaultState,action)=>{
    //state： store上一次存的数据
    //action:参数
    
    if(action.type==='change_input_value'){
        const newState =JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }


    if(action.type==='add_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.listArr.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type==='delet_item'){
        const newState =  JSON.parse(JSON.stringify(state));
        newState.listArr.splice(action.index,1);
        return newState;
    }

    return state;
}