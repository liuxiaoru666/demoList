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

}
`;
export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
width:160px;
height:38px;
margin-top:9px;
border:none;
border-radius:19px;
background:#eee;
padding:0 20px;
box-sizing:border-box;
font-size:14px;
margin-left:20px;
&::placeholder{
    color:#9999;
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
