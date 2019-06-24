import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`;

export const HomeLeft = styled.div`
width:625px;
margin-left:15px;
padding-top:30px;
float:left;
.bannerImg{
    width:625px;
    height:270px;
    cursor:pointer;
    border-radius:10px;
}
`;

export const HomeRight = styled.div`
width:240px;
float:right;
`;

export const TopicWrapper=styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-10px;
`;

export const TopicItem=styled.div`
margin-left:10px;
padding-right:10px;
float:left;
background:#f7f7f7;
height:32px;
line-height:32px;
font-size:14px;
color:#333;
border:1px solid #dcdcdc;
border-radius:4px;
margin-bottom:15px;
.topicImg{
    width:32px;
    height:32px;
    display:block;
    float:left;
    margin-right:10px;
}
cursor:pointer;
`;

export const ListItem=styled.div`
padding:20px 0;
border-border:1px solid #f0f0f0;
width:100%;
overflow:hidden;
h3{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    :hover{text-decoration:underline;}
    cursor:pointer;
}
p{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
.listPic{
    width:150px;
    height:100px;
    display:block;
    border-radius:4px;
    float:right;
    cursor:pointer;
}
`;

export const ListInfo=styled.div`
padding-right:165px;
`