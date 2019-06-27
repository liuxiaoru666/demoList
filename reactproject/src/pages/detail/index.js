
import React,{Component} from 'react';
import {DetailWrapper,Content} from './style';
import {connect} from 'react-redux';
class Detail extends Component {
    render(){
        const {title,content}=this.props;
        return(
            <DetailWrapper>
               
                <h2>{title}</h2>
                <Content dangerouslySetInnerHTML={{__html:content}}/>
            </DetailWrapper>
        )
    }
}
const mapState=(state)=>{
    return{
        title:state.get('detail').get('title'),
        content:state.get('detail').get('content')
    }
}


export default connect(mapState,null)(Detail);