const defaultState = {
    focused:false//搜索框
};


export default (state=defaultState,action) => {
    if(action.type==='search_focus'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }

    if(action.type==='search_blur'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    return state;
}