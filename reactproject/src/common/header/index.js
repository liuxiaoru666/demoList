import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    Adition,
    Button
} from './style';

class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <NavSearchWrapper>
                    <NavSearch></NavSearch>
                    <i className='iconfont'>&#xe800;</i>
                    </NavSearchWrapper>
                </Nav>
                <Adition>
                    <Button className='write'><i className='iconfont'>&#xe608;</i><span>写文章</span></Button>
                    <Button className='reg'>注册</Button>
                </Adition>
            </HeaderWrapper>
        )
    }
}

export default Header;