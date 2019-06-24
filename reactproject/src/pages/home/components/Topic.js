import React,{Component} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';


class Topic extends Component {
    render(){
        const {topicList} = this.props;
        return(
               <TopicWrapper>
                   {topicList.map((item,index)=>{
                       return(
                        <TopicItem key={item.get('id')}>
                        <img className="topicImg" src={item.get('imgUrl')} alt="图片"/>
                            {item.get('title')}
                        </TopicItem>
                       )
                   })}
               </TopicWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
return{
    topicList:state.get('home').get('topicList')
}
}


export default connect(mapStateToProps,null)(Topic);