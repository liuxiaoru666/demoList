import React,{Component} from 'react';
//样式
import {HomeWrapper,HomeLeft,HomeRight} from './style';
//首页组件
import Topic from './components/Topic';
import List from './components/List';
import Board from './components/Board';
import Writer from './components/Writer';

class Home extends Component {
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
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
        )
    }
}

export default Home;