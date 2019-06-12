
// 程序入口文件
import React from 'react';//用了jsx语法要引入React
import ReactDOM from 'react-dom';
import TodoList from './todoList';

ReactDOM.render(//把组件挂载到dom节点
  <TodoList />,//jsx语法（js里面写html标签）
  document.getElementById('root')//要挂载的dom节点
);
