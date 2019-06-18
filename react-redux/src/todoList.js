import React,{Component,Fragment} from 'react';
import{connect}  from 'react-redux';
class TodoList extends Component {
    render(){
        return(
            <Fragment>
            <div>
                <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                <button >提交</button>
            </div>
            <ul>
                {
                    this.props.listArr.map((item,index)=>{
                        return(
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ul>
            </Fragment>
        )
    }
}


//state映射到props
const mapStateToProps = (state)=>{
    return{
        inputValue:state.inputValue,
        listArr:state.listArr
    }
}


//store.dispatch 映射到 props
const mapDispatchToProps=(dispatch)=>{
    return{
        changeInputValue(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        },

      
    }
}
//todoList和store链接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);