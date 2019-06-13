import React,{Component,Fragment} from 'react';
import TodoItem from './todoItem';
import Test from './test';
import './style.css';
class TodoList extends Component {
    constructor(props){
        super(props);
        //组件状态
        this.state = {
            inputValue:'',
            listArr:[]
        };
        {/*方法在此处绑定this*/}
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

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
                <div><label htmlFor='fs'>输入内容</label><input id='fs' className='input' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleClick}>提交</button>
                </div>
                <ul>
                    {
                    /*this.getTodoItem()*/

                    this.state.listArr.map((item,index)=>{
                        // 给循环渲染的对象加key
                        return(//此括号不能换行
                                <TodoItem 
                                    key={index}
                                    content ={item} 
                                    index={index} 
                                    deletItem={this.handleDelete}/>
                        )
                    })
                   }
                </ul>
                <Test content = {this.state.inputValue}/>
            </Fragment>
        )
    }

    //  getTodoItem(){
    //      return(
    //         this.state.listArr.map((item,index)=>{
    //             return(
    //                 <div>
    //                     <TodoItem 
    //                         content ={item} 
    //                         index={index} 
    //                         deletItem={this.handleDelete}/>
    //                 </div>
    //             )
    //         })
    //        )
    //  }

    handleInputChange(e){
        //setState负责处理改变数据
        this.setState({
            inputValue:e.target.value
        })
        {/*const value =e.target.value 
        this.setState(()=>({
            inputValue:value
        }))*/}
    }

    handleClick(){
        if(this.state.inputValue){
            this.setState({
                //改变数组(...Es6展开运算符)
                listArr:[...this.state.listArr,this.state.inputValue],
                inputValue:''
            })
            
        }
    }

    handleDelete(index){
        {
        //immutable
        //改变数据必须调用setState，state不允许直接改变state内容
        }
        const list = [...this.state.listArr];
        list.splice(index,1);
        this.setState({
            listArr:list
        })
    }
}

export default TodoList;
