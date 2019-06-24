import React,{Component} from 'react';
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
    Button,
    HotSearch,
    HotSearchTitle,
    Switch,
    SearchItem
} from './style';
import {actionCreators} from './store';
class Header extends Component {
    render(){
        const {focused,handleInputBlur,handleInputFocus} = this.props;
        return(
            <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                <NavSearchWrapper>
                 {this.getListArea()}
                <CSSTransition timeout={200} in={focused} classNames="slide">
                <NavSearch 
                className={focused?'focused':''} 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ></NavSearch>
                </CSSTransition>
                <i  className={this.props.focused?'focused iconfont':'iconfont'}>&#xe800;</i>
                </NavSearchWrapper>
            </Nav>
            <Adition>
                <Button className='write'><i className='iconfont'>&#xe608;</i><span>写文章</span></Button>
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
                    <Switch onClick={()=>{handleClick(page,totalPage)}}>换一批</Switch>
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
        totalPage:state.get('header').get('totalPage')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getListData());

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
        handleClick(page,totalPage){
            if(page<totalPage){

                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            
           
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);