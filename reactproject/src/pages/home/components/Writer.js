import React,{Component} from 'react';
import {WriterWrap,SwitchTit,WriterItem} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store'
class Writer extends Component {
    render(){
        let {writerList,page,totalPage}=this.props;
        writerList = writerList.toJS();
        let newList=[];
        for(var i =(page-1)*5;i<page*5;i++){
            if(writerList[i]){
                newList.push(writerList[i])
            }
        }
        return(
               <div>
                   <WriterWrap>
                       <SwitchTit>
                           <span>作者推荐</span>
                           <div className='fr' onClick={()=>{this.props.changeWriter(this.switchIcon,page,totalPage)}}><i className="iconfont" ref={(o)=>{this.switchIcon=o}}>&#xe851;</i>换一批</div>
                       </SwitchTit>
                       {
                           newList.map((item,index)=>{
                               return(
                                <WriterItem key={item.id}>
                                    <img src={item.imgUrl} alt=""/>
                                    <div className="content">
                                        <span className="name">{item.name}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="addFuns">
                                        <i className="iconfont">&#xe61f;</i>
                                        关注
                                    </div>
                                </WriterItem>
                               )
                           })
                       }
                       <div className="more">查看全部</div>
                   </WriterWrap>
               </div>
        )
    }

    componentDidMount(){
        this.props.getWriterList(this.props.page);
    }
}


const mapState=(state)=>{
    return{
    writerList:state.get('home').get('writerList'),
    page:state.get('home').get('page'),
    totalPage:state.get('home').get('totalPage'),
    }
}
const mapDispatch=(dispatch)=>{
    return{
        changeWriter(switchIcon,page,totalPage){
            var transAngle = switchIcon.style.transform.replace(/[^0-9]+/ig,"");
            if(transAngle){
                transAngle=parseInt(transAngle);
            }else{
                transAngle=0;
            }
            switchIcon.style.transform="rotate("+(transAngle+360)+"deg)";
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
           
        },
        getWriterList(page){
            dispatch(actionCreators.getWriterList());
        }

    }
}

export default connect(mapState,mapDispatch)(Writer);