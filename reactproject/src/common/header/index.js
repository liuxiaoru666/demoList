import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    Adition,
    Button,
    HotSearch,
    HotSearchTitle,
    Switch,
    SearchItem
} from './style';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
class Header extends Component {
    render(){
        const {focused,handleInputBlur,handleInputFocus,list,login,logout} = this.props;
        return(
            <HeaderWrapper>
            <Logo/>
            <Nav>
                <Link to="/">
                    <NavItem className='left active'>首页</NavItem>
                </Link>
                <NavItem className='left'>下载APP</NavItem>
                {login?<NavItem className='right' onClick={logout}>退出</NavItem>:<Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
                <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                <NavSearchWrapper>
                 {this.getListArea()}
                <CSSTransition timeout={200} in={focused} classNames="slide">
                <NavSearch 
                className={focused?'focused':''} 
                onFocus={()=>{handleInputFocus(list)}}
                onBlur={handleInputBlur}
                ></NavSearch>
                </CSSTransition>
                <i  className={this.props.focused?'focused iconfont searchIcon':'iconfont searchIcon'}>&#xe800;</i>
                </NavSearchWrapper>
            </Nav>
            <Adition>
                <Link to="/write">
                    <Button className='write'><i className='iconfont'>&#xe608;</i><span>写文章</span></Button>
                </Link>
                <Button className='reg'>注册</Button>
            </Adition>
        </HeaderWrapper> 
        )
    }

     getListArea(show){
         //解构赋值语法
        const {focused,list,page,handleMouseEnter,handleMouseLeave,mouseIn,handleClick,totalPage}=this.props;
        const jsList=list.toJS();
        const currentList=[];
        for(let i=(page-1)*10;i<page*10;i++){
            if(jsList[i]){
                currentList.push(jsList[i])
            }
        }
        if(focused||mouseIn){
            return(
            <HotSearch onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <HotSearchTitle>
                    热门搜索
                    <Switch onClick={()=>{handleClick(page,totalPage,this.spinIcon)}}><i className='iconfont spin' ref={(icon)=>{this.spinIcon=icon}}>&#xe851;</i>换一批</Switch>
                </HotSearchTitle>
                <div>
                    {
                        currentList.map((item,index)=>{
                            return(
                                <SearchItem key={index}>{item}</SearchItem>
                            )
                        })
                    }
                </div>
            </HotSearch>
            )
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        //
        focused:state.get('header').get('focused'),//immutable.js get方法
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        mouseIn:state.get('header').get('mouseIn'),
        totalPage:state.get('header').get('totalPage'),
        login:state.get('login').get('login')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(list){
           list.size===0&&dispatch(actionCreators.getListData());
            dispatch(actionCreators.searchFocus());

        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeace())
        },
        handleClick(page,totalPage,iconDom){
            let originAngle = iconDom.style.transform.replace(/[^0-9]+/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle=0;
            }
            iconDom.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);