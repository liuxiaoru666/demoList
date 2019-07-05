import React, { Component,Fragment } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style';
import {IconfontCss} from './statics/iconfont/iconfont'
import Header from './common/header/index';
import {BrowserRouter,Route} from 'react-router-dom';

//页面组件
import Home from './pages/home';
import Detail from './pages/detail/';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component {  
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontCss/>
        <Provider store={store}>
           <BrowserRouter>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route> 
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
           </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
