
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
title:'头部',
content:  '<img src="https://upload-images.jianshu.io/upload_images/83636-3f8d9b00c089c66a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp" alt=""/><p>罗永浩曾经讲过一个他朋友的故事：那时，他这个朋友还在杂志社做编辑。朋友洋洋得意地和他说：“我编辑任何文章，只用三个组合键，就是复制、全选、剪切，多一个我都不用。”朋友说给多少钱做多少事，老板给的钱少，工作自然就随便做做。后来罗永浩问朋友：“这样编辑的文章好吗？”朋友回答说：“当然不好，而且自己编辑的水平也越来越差，但是工资这么少，我才不要傻傻的做呢！”朋友以为自己很聪明，才不会像其他人一样拿着低薪“任劳任怨”，但最终因为工作越做越差，当其他同事涨薪升职时，他却被扫地出门。。</p>'
  
});


export default (state=defaultState,action) => {
    switch(action.type){
        default:
        return state;
    }
}