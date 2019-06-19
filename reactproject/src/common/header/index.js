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

    constructor(props){
        super(props);
        this.state = {
            focus:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);

    }

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
                    <NavSearch 
                    className={this.state.focus?'focused':''} 
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                    ></NavSearch>
                    <i  className={this.state.focus?'focused iconfont':'iconfont'}>&#xe800;</i>
                    </NavSearchWrapper>
                </Nav>
                <Adition>
                    <Button className='write'><i className='iconfont'>&#xe608;</i><span>写文章</span></Button>
                    <Button className='reg'>注册</Button>
                </Adition>
            </HeaderWrapper>
        )
    }

    handleInputFocus(){
        this.setState({
            focus:true
        })
    }
    handleInputBlur(){
        this.setState({
            focus:false
        })
    }
}

export default Header;