
import * as constants  from './constants';
import {fromJS} from 'immutable';
// immutalble.js 生成immutable对象，把state变成不可改变的对象
const defaultState = fromJS({
   topicList:[
       {id:1,title:'社会热点',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:2,title:'手绘',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:3,title:'社会热点',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:4,title:'手绘',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:5,title:'社会热点',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:6,title:'手绘',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:7,title:'社会热点',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
       {id:8,title:'手绘',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'}
    ],
    listArr:[
        {id:1,title:'女人心死了的三大征兆，非常准',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload-images.jianshu.io/upload_images/2100084-cfaa6145b25dd327?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
        {id:2,title:'好用的读书笔记app精选',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload-images.jianshu.io/upload_images/13665754-953e0522de21897d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
        {id:3,title:'又一童年女神以脸僵终结，田丽出演《都挺好》，网友：不敢认',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload-images.jianshu.io/upload_images/1545827-5ad10582f3cf2072?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
        {id:4,title:'3款高质量黑科级APP，一个万能BT种子资源网站，请低调使用',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload-images.jianshu.io/upload_images/16027370-53c9fb232b0bf7fd.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},
        {id:5,title:'书籍中有哪些句子容易触动人心？',content:'现在市面上各种类型的读书app层出不穷，但大多数都主打阅读，做笔记的app并不多见，可是阅读之余不少人也会有做笔记的需要。 或者是记录一下读过的...',imgUrl:'https://upload-images.jianshu.io/upload_images/5488183-a0a040e77b1bd7b2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'},  
    ]
});


export default (state=defaultState,action) => {
    switch(action.type){
        default:
        return state;
    }
}