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
width:280px;
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
`;


export const BoradWrapper=styled.div`
padding-bottom: 4px;
min-height: 228px;
padding-top:30px;
`;

export const BoradItem=styled.div`
img{
    width:100%;
    margin-bottom:5px;
}
`;

export const DownloadWraper=styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing:border-box;
    cursor:pointer;
    position:relative;
    :hover .fade{
        opacity:1;
    }
    .smPic{
        width:60px;
        height:60px;
        vertical-align: middle;
    }
    .lgPic{
        width:100%;
        height:100%;
    }
    div{
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
    }
    h2{
        font-size: 15px;
         color: #333;
    }
    p{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
    .fade{
        width:180px;
        height:180px;
        position:absolute;
        top:-200px;
        left:50%;
        margin-left:-90px;
        background:#fff;
        opacity:0;
        padding:20px;
        box-sizing:border-box;
        border:1px solid #999;
        border-radius:5px;
        :hover{
            opacity:0;
        }
    }
`;

export const WriterWrap=styled.div`
    width:100%;
    .more{
        padding: 7px 7px 7px 12px;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        box-sizing:border-box;
        text-align:center;
        margin-top:20px;
        cursor:pointer;
    }
`;
export const SwitchTit=styled.div`
    font-size: 14px;
    color: #969696;
    cursor:pointer;
    .fr{
        float:right;
    }
    .iconfont{
        float:left;
        margin-right:2px;
        display:block;
        font-size:12px;
        line-height:14px;
        transition:all .2s ease-out;
        transform-origin:center center;
    }
`;
export const WriterItem=styled.div`
    width:100%;
    padding-top:20px;
    overflow:hidden;
    img{
        display:block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius:50%;
    }
    .content{
        float:left;
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
}
    }
    .name{
        color:#333;
        line-height:20px;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .addFuns{
        text-align:right;
        padding-top:5px;
        font-size:14px;
        color:#42c02e;
        cursor:pointer;
        .iconfont{
            font-size:12px;
        }
    }
`;