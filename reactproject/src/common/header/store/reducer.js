
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});


export default (state=defaultState,action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);//immutable对象set方法，结合之前对象返回新的对象
        case  constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.UPDATE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEACE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}