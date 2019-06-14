import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    //
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        //解构赋值
        const {content,test} = this.props;
        //JSX -> createElement -> JS对象(虚拟DOM) -> 真实DOM
        return(
            <Fragment>
                {/*通过props获取父组件传递的数据*/}
                <div onClick={this.handleClick}>{test}-{content}</div>
            </Fragment>
        )
    }
    //性能提升
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }
    handleClick(){
        //子组件调用父组件方法
        const {index} = this.props;
        this.props.deletItem(index)
    }
}
//属性强校验
//isRequired 表示必传
// TodoItem.propTypes={
//     test:PropTypes.string.isRequired,
//     content:PropTypes.string,
//     deleteItem:PropTypes.func,
//     index:PropTypes.number
// }
//属性默认值
// TodoItem.defaultProps={
//     test:'hello world'
// }

export default TodoItem;