import styled from 'styled-components';
import logoPic from '../../statics/images/nav_logo.png'
export const HeaderWrapper = styled.div`
    width:100%;
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`;

export const Logo = styled.a.attrs({href:'/'})`
height:56px;
position:absolute;
display:inline-block;
top:0;
left:0;
width:100px;
background:url(${logoPic});
background-size:contain;
`;

export const Nav = styled.div`
width:960px;
height:100%;
margin:0 auto;
`;

export const NavItem = styled.div`
padding:0 15px;
line-height:56px;
&.left {
    float:left;
}
&.right{
    float:right;
}
&.active{
    color:#ea6f5a;
}
`;

export const NavSearchWrapper = styled.div`
height:100%;
float:left; 
position:relative;
.iconfont{
    position:absolute;
    right:5px;
    top:13px;
    width:30px;
    height:30px;
    text-align:center;
    line-height:30px;
    border-radius:15px;
    &.focused{
        background:#999;
    }
}
.slide-enter{
    width:180px;
    transition:all .2s ease-out;
}
.slide-enter-active{
    width:240px;
}
.slide-exit{
    transition:all .2s ease-out;
}
.slide-exit-active{
    width:180px;
}
`;

export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
width:180px;
height:38px;
margin-top:9px;
border:none;
border-radius:19px;
background:#eee;
padding:0 40px 0 20px;
color:#999;
box-sizing:border-box;
font-size:14px;
margin-left:20px;
&::placeholder{
    color:#9999;
}
&.focused{
    width:240px;
}
`;

export const Adition = styled.div`
height:58px;
position:absolute;
top:0;
right:0;
`;

export const Button = styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
box-sizing:border-box;
height:38px;
line-height:38px;
border-radius:19px;
font-size:15px;
.iconfont{
    margin-right:5px;
}
&.reg{
    color:#ea6f5a;
    border:1px solid #ea6f5a;
}
&.write{
    background:#ea6f5a;
    color:#fff;
}
`;

export const HotSearch = styled.div`
position: absolute;
background-color: #fff;
box-shadow: 0 0 8px rgba(0,0,0,.2);
width:250px;
margin-top: 9px;
left: 20px;
top: 100%;
padding:20px 20px 10px;
border-radius: 4px;
color:#787878;
`;

export const HotSearchTitle = styled.div`
height: 20px;
line-height:20px;
margin-bottom: 10px;
box-sizing:border-box;
font-size:14px;
`;

export const Switch = styled.span`
float:right;
font-size:13px;
:hover{
    color:#333;
}
cursor:pointer;
`;

export const SearchItem = styled.a`
display:block;
float:left;
padding:2px 5px;
border:1px solid #ddd;
border-radius:3px;
margin-right:10px;
margin-bottom:10px;
font-size:12px;
:hover{
    color:#333;
    border:1px solid #999;
}
cursor:pointer;

`