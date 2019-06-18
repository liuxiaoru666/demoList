const defaultState={
    inputValue:'',
    listArr:['dell']
}
export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type==='add_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.listArr.push(action.value);
        return newState;

    }
    return state;
}