import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Router from './router'

class App extends Component {
  render() {
    return (
        <Fragment>
          <BrowserRouter>
            {Router.map((item, index) => {
              return <Route key={index} path={item.path} exact={item.exact} component={item.component} />
            })}
          </BrowserRouter>
        </Fragment>
      );
  }
}

export default App;
