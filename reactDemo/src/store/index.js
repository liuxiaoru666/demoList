
import  {createStore} from 'redux';
import reducer from './reducer';


//创建store->仓库管理员
const store = createStore(reducer); 

export default store;


