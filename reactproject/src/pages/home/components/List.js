import React,{Component} from 'react';
import {ListItem,ListInfo} from '../style';
import {connect} from 'react-redux';
class List extends Component {
    render(){
        const {listArr}=this.props;
        return(
               <div>
                   {
                      listArr.map((item,index)=>{
                           return(
                            <ListItem key={item.get('id')}>
                                <img className='listPic' src={item.get('imgUrl')} alt=''/>
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('content')}</p>
                                </ListInfo>
                            </ListItem>
                           )
                       })
                   }
               </div>
        )
    }
}
 
const mapState=(state)=>{
    return{
        listArr:state.get('home').get('listArr')
    }
}

export default connect(mapState,null)(List);