import React, { Component,Fragment } from 'react';
import {GlobalStyle} from './style';
import {IconfontCss} from './statics/iconfont/iconfont'
import Header from './common/header/index';
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontCss/>
          <Header/>
      </Fragment>
    );
  }
}

export default App;
