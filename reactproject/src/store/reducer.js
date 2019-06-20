// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';
import {reducer as headReducer} from '../common/header/store';

//redux-immut
export default combineReducers({
    header:headReducer
})