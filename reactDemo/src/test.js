import React,{Component,Fragment} from 'react';
class Test extends Component{
    render(){
        //1、组件的state或者props发生变化，render函数就会执行
        //2、父组件的render函数重新运行时，子组件的render也会重新执行一次
        return(
            <Fragment>
                 <div>{this.props.content}</div>
            </Fragment>
        )
    }
}

export default Test;