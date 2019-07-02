
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
login:false
  
});


export default (state=defaultState,action) => {
    switch(action.type){
    case constants.CHANGE_LOGIN_STATUS:
        return state.set('login',action.status)
    case constants.LOGOUT:
        return state.set('login',action.status);
    default:
        return state;
    }
}