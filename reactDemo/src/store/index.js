
import  {createStore,applyMiddleware,compose} from 'redux';
//redux-thunk中间件
// import thunk from 'redux-thunk';
//redux-saga中间件
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas.js';
import reducer from './reducer';

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()


//同时使用reduxdevTool和redux-thunk
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
      // thunk
      sagaMiddleware
      )
  );

//创建store->仓库管理员
const store = createStore(
    reducer,
    enhancer
    ); 

     // 运行sagas
sagaMiddleware.run(mySaga)
export default store;


