
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({

   topicList:[],
    listArr:[],
    boardList:[],
    writerList:[],
    page:1,
    totalPage:1,
    showScroller:false
});


export default (state=defaultState,action) => {
    switch(action.type){
        case constants.UPDATA_HOME_DATA:
            return state.merge({
                "listArr":fromJS(action.data.listArr),
                "writerList":fromJS(action.data.writerList),
                "topicList":fromJS(action.data.topicList),
                "boardList":fromJS(action.data.boardList),
                "totalPage":action.totalPage
            });
        case constants.ADD_HOME_LIST:
            return state.set('listArr',state.get('listArr').concat(action.data));
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showScroller',action.show)
        default:
        return state;
    }
}