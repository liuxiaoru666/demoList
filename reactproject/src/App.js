import React, { Component,Fragment } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style';
import {IconfontCss} from './statics/iconfont/iconfont'
import Header from './common/header/index';
class App extends Component {  
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontCss/>

        <Provider store={store}>
           <Header/>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
