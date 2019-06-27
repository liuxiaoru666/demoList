
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
title:'',
content:''
  
});


export default (state=defaultState,action) => {
    switch(action.type){
        case constants.UPDATA_DETAIL:
            return state.set("title",action.title).set("content",action.content)
        default:
        return state;
    }
}