
// 程序入口文件
import React from 'react';//用了jsx语法要引入React
import ReactDOM from 'react-dom';
import App from './App';//引入组件，必须大写字母开头

ReactDOM.render(//把组件挂载到dom节点
  <App />,//jsx语法（js里面写html标签）
  document.getElementById('root')//要挂载的dom节点
);
