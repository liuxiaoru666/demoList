
import  {createStore,applyMiddleware,compose} from 'redux';
//引入redux中间件
import thunk from 'redux-thunk';
import reducer from './reducer';

//同时使用reduxdevTool和redux-thunk
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );
//创建store->仓库管理员
const store = createStore(
    reducer,
    enhancer
    ); 

export default store;


