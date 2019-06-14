import React,{Component,Fragment} from 'react';
import TodoItem from './todoItem';
//store
import store from './store';
//antd组件库
import { Input,Button} from 'antd';
import 'antd/dist/antd.css';
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
        return(
            //jsx语法外层要有一个包裹元素,用Fragment占位符，可以隐藏最外层标签
            <Fragment>
                {
                    //绑定事件要驼峰写法
                    //js表达式和变量写在花括号里面
                    //类名要用className
                    //label for要用htmlFor
                    //dangerouslySetInnerHTML属性的使用
                }
                <div style={{marginTop:'10px'}}>
                    <label htmlFor='fs'>输入内容</label>
                    <Input  
                    style={{width:'300px',marginRight:'20px'}}
                    placeholder='请输入内容'
                    id='fs' 
                    className='input' 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleClick}>提交</Button>
                </div>
                <ul>
                    {
                    this.state.listArr.map((item,index)=>{
                        // 给循环渲染的对象加key
                        return(//此括号不能换行
                                <TodoItem 
                                    key={item}
                                    content ={item} 
                                    index={index} 
                                    deletItem={this.handleDelete}/>
                        )
                    })
                   }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        const action = {
            type:'change_input_value',
            inputValue:e.target.value
        }
        store.dispatch(action);
        //setState负责处理改变数据
        // this.setState({
        //     inputValue:e.target.value
        // })

    }
    handleClick(){
        if(this.state.inputValue){
            const action = {
                type:'add_item',
            }
            store.dispatch(action)

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
        const action = {
            type:'delet_item',
            index:index
        }
        store.dispatch(action);

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
