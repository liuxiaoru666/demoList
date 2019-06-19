import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
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
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch/>
                </Nav>
                <Adition>
                    <Button className='write'>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Adition>
            </HeaderWrapper>
        )
    }
}

export default Header;