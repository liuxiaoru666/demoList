import React,{Component} from 'react';
import {BoradWrapper,BoradItem} from '../style';
import {connect} from 'react-redux';
class Board extends Component {
    render(){
        const {boardList}=this.props;
        return(
               <BoradWrapper>
                  {
                      boardList.map((item,index)=>{
                          return(
                            <BoradItem key={item.get('id')}>
                            <a href='/'>
                            <img src={item.get('imgUrl')} alt=""/>
                            </a>
                             </BoradItem>
                          )
                      })
                  }
               </BoradWrapper>
        )
    }
}


const mapState=(state)=>{
    return{
        boardList:state.get('home').get('boardList')
    }
}

export default connect(mapState,null)(Board);