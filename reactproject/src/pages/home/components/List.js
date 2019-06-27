import React,{Component} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';
class List extends Component {
    render(){
        const {listArr,loadMore}=this.props;
        return(
               <div>
                   {
                      listArr.map((item,index)=>{
                           return(
                            <Link to={'/detail/'+item.get('id')} key={index}>
                                <ListItem>
                                    <img className='listPic' src={item.get('imgUrl')} alt=''/>
                                    <ListInfo>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('content')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                           )
                       })
                   }
                <LoadMore onClick={loadMore}>阅读更多</LoadMore>
               </div>
        )
    }
}
 
const mapState=(state)=>{
    return{
        listArr:state.get('home').get('listArr')
    }
}

const mapDispatch=(dispatch)=>{
    return{
        loadMore(){
            dispatch(actionCreators.loadMore());
        }
    }
}

export default connect(mapState,mapDispatch)(List);