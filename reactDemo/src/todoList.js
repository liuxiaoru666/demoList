import React,{Component,Fragment} from 'react';
//store
import store from './store';
//引入actions
import {getInputChangeAction,getAddItemAction,getDeletItemAction} from './store/actionCreator';

import TodoListUI from './todoListUI'; 
class TodoList extends Component {
    constructor(props){
        super(props);
        //从store获取组件状态
        this.state = store.getState();
        // this.state = {
        //     inputValue:'',
        //     listArr:[]
        // };
        {/*方法在此处绑定this*/}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        //订阅store改变，触发方法
        store.subscribe(this.handleStoreChange);
    }
    //组件挂载
    render(){
        return (
            <TodoListUI 
            inputValue={this.state.inputValue} 
            handleInputChange={this.handleInputChange}
            handleClick = {this.handleClick}
            list={this.state.listArr}
            handleDelete={this.handleDelete}
            />
        )
    }
    handleInputChange(e){
        store.dispatch(getInputChangeAction(e.target.value));
        //setState负责处理改变数据
        // this.setState({
        //     inputValue:e.target.value
        // })

    }
    handleClick(){
        if(this.state.inputValue){
            store.dispatch(getAddItemAction())

            // this.setState({
            //     //改变数组(...Es6展开运算符)
            //     listArr:[...this.state.listArr,this.state.inputValue],
            //     inputValue:''
            // })
            
        }
    }
    handleDelete(index){
        //immutable
        //改变数据必须调用setState，state不允许直接改变state内容
        
        store.dispatch(getDeletItemAction(index));

        // const list = [...this.state.listArr];
        // list.splice(index,1);
        // this.setState({
        //     listArr:list
        // })
    }

    handleStoreChange(){
        this.setState(store.getState());
    }
}

export default TodoList;
