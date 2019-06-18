import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList';
import {Provider} from 'react-redux';
import store from './store';

const App = (
  //Provider里面组件都能获得store
<Provider store={store}>
  <TodoList/>
</Provider>

);
ReactDOM.render(
  App,
  document.getElementById('root')
);
