import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
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
import {actionCreators} from './store';

//无状态组件
const Header = (props)=>{
    return(
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                <NavSearchWrapper>
                <CSSTransition timeout={200} in={props.focused} classNames="slide">
                <NavSearch 
                className={props.focused?'focused':''} 
                onFocus = {props.handleInputFocus}
                onBlur = {props.handleInputBlur}
                ></NavSearch>
                </CSSTransition>
                <i  className={props.focused?'focused iconfont':'iconfont'}>&#xe800;</i>
                </NavSearchWrapper>
            </Nav>
            <Adition>
                <Button className='write'><i className='iconfont'>&#xe608;</i><span>写文章</span></Button>
                <Button className='reg'>注册</Button>
            </Adition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state)=>{
    return{
        focused:state.header.focused
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());

        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);