
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({

   topicList:[],
    listArr:[],
    boardList:[],
    writerList:[],
    page:1,
    totalPage:1
});


export default (state=defaultState,action) => {
    switch(action.type){
        case constants.UPDATA_WRITER_LIST:
        return state.set('writerList',action.data).set('totalPage',action.totalPage);
        case constants.UPDATA_TOPIC_LIST:
            return state.set('topicList',action.data);
            case constants.UPDATA_BOARD_LIST:
                    return state.set('boardList',action.data);
        case constants.UPDATA_HOME_LIST:
            return state.set("listArr",action.data);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        
        default:
        return state;
    }
}