import React,{Component,Fragment} from 'react';

class TodoList extends Component {
    render(){
        return(
            //jsx语法外层要有一个包裹元素,用Fragment占位符，隐藏最外层标签
            <Fragment>
                <div><input/><button>提交</button></div>
                <ul>
                    <li>香蕉</li>
                    <li>苹果</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
