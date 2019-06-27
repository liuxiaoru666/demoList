// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';
import {reducer as headReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store'

//redux-immut
export default combineReducers({
    header:headReducer,
    home:homeReducer,
    detail:detailReducer
})