
import React,{Component} from 'react';
import {DetailWrapper,Content} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
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
    
    componentDidMount(){
        this.props.getDetailData();
        console.log(this.props.match.params.id)
    }
}


const mapState=(state)=>{
    return{
        title:state.get('detail').get('title'),
        content:state.get('detail').get('content')
    }
}

const mapDisPatch=(dispatch)=>{
    return{
        getDetailData(){
            dispatch(actionCreators.getDetailData());
        }
    }
}


export default connect(mapState,mapDisPatch)(Detail);