import React,{Component,Fragment} from 'react';
//antd组件库
import { Input,Button,List} from 'antd';
import 'antd/dist/antd.css';

class TodoListUI extends Component {
    render(){
        return (
            <Fragment>
            <div style={{marginTop:'10px'}}>
                <label htmlFor='fs'>输入内容</label>
                <Input  
                style={{width:'300px',marginRight:'20px'}}
                placeholder='请输入内容'
                id='fs' 
                className='input' 
                value={this.props.inputValue} 
                onChange={this.props.handleInputChange}
                />
                <Button onClick={this.props.handleClick}>提交</Button>
            </div>
            <List
                dataSource={this.props.list}
                renderItem={(item,index) => (
                <List.Item onClick={(index)=>this.props.handleDelete(index)}>
                    {item}
                </List.Item>
                )}
            />
        </Fragment>
        )
       
        }
    }

    export default TodoListUI;