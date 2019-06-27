import React, { Component,Fragment } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style';
import {IconfontCss} from './statics/iconfont/iconfont'
import Header from './common/header/index';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail'
class App extends Component {  
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontCss/>
        <Provider store={store}>
           <Header/>
           <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
           </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
