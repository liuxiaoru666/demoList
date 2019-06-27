import React,{Component} from 'react';
//样式
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
//首页组件
import Topic from './components/Topic';
import List from './components/List';
import Board from './components/Board';
import Writer from './components/Writer';
import Download from './components/download';

import {connect} from 'react-redux';
import {actionCreators} from './store'

class Home extends Component {

    scrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return(
                <HomeWrapper>
                    <HomeLeft>
                        <img className='bannerImg' alt='图片' src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Board></Board>
                        <Download></Download>
                        <Writer></Writer>
                    </HomeRight>
                    {this.props.showScroller?<BackTop onClick={this.scrollTop}>TOP</BackTop>:null}
                </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getHomeData(this.props.page);
        this.bindEvents();
;    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollerShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollerShow)
    }
}

const mapState = (state)=>{
    return{
        showScroller:state.get('home').get('showScroller')
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getHomeData(page){
            dispatch(actionCreators.getHomeData());
        },
        changeScrollerShow(){
         var scrollTop=document.documentElement.scrollTop||document.body.scrollTo;
         if(scrollTop>200){
             dispatch(actionCreators.toggleScrollShow(true))
         }else{
            dispatch(actionCreators.toggleScrollShow(false))
         }
        }

    }
}


export default connect(mapState,mapDispatch)(Home);