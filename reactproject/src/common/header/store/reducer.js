
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
    focused:false//搜索框
});


export default (state=defaultState,action) => {
    if(action.type===constants.SEARCH_FOCUS){
        return state.set('focused',true);//immutable对象set方法，结合之前对象返回新的对象
    }

    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false);
    }
    return state;
}