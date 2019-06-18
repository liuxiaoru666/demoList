import {takeEvery,put} from 'redux-saga/effects'; 
import{SAGA_GET_LIST} from './actiontype';
import {initListAction} from './actionCreator'; 
import axios from 'axios';


function* getInitList(){
    try {
        const res = yield axios.get('/list.json');
         const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log('网络请求失败')
    }
}

//generator 函数
function* mySaga() {
     yield takeEvery(SAGA_GET_LIST, getInitList);
   
  }
  
  export default mySaga;