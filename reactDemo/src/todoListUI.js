import React,{Fragment} from 'react';
//antd组件库
import { Input,Button,List} from 'antd';
import 'antd/dist/antd.css';


//当组件只有render函数时，使用无状态组件（性能较高）
const TodoListUI = (props)=>{
    return(
        <Fragment>
            <div style={{marginTop:'10px'}}>
                <label htmlFor='fs'>输入内容</label>
                <Input  
                style={{width:'300px',marginRight:'20px'}}
                placeholder='请输入内容'
                id='fs' 
                className='input' 
                value={props.inputValue} 
                onChange={props.handleInputChange}
                />
                <Button onClick={props.handleClick}>提交</Button>
            </div>
            <List
                style={{width:'300px'}}
                dataSource={props.list}
                renderItem={(item,index) => (
                <List.Item onClick={()=>props.handleDelete(index)}>
                    {item}
                </List.Item>
                )}
            />
        </Fragment>
    )
}
// class TodoListUI extends Component {
//     render(){
//         return (
//             <Fragment>
//             <div style={{marginTop:'10px'}}>
//                 <label htmlFor='fs'>输入内容</label>
//                 <Input  
//                 style={{width:'300px',marginRight:'20px'}}
//                 placeholder='请输入内容'
//                 id='fs' 
//                 className='input' 
//                 value={this.props.inputValue} 
//                 onChange={this.props.handleInputChange}
//                 />
//                 <Button onClick={this.props.handleClick}>提交</Button>
//             </div>
//             <List
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (
//                 <List.Item onClick={(index)=>this.props.handleDelete(index)}>
//                     {item}
//                 </List.Item>
//                 )}
//             />
//         </Fragment>
//         )
       
//         }
//     }

    export default TodoListUI;