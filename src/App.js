import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import OriginDebounce from './pages/origindemo/debounce'
import OriginThrottle from './pages/origindemo/throttle'
import RxjsDebounce from './pages/rxjsdemo/debounce'
import RxjsThrottle from './pages/rxjsdemo/throttle'
import RxjsRetry from './pages/rxjsdemo/retry'
import Subject from './pages/rxjsdemo/subject'
import Operators from './pages/rxjsdemo/operators'
import RetryBackoff from './pages/rxjsdemo/retrybackoff'
import RxjsHooksUseObservable from './pages/rxjsdemo/rxjshooksUseObservable'
import RxjsHooksUseEventCallback from './pages/rxjsdemo/rxjshooksUseEventCallback'
import Observable from './pages/rxjsdemo/observable'

const routers = [
  { key: 0, path: '/', exact: true, component: Home },
  { key: 1, path: '/origindebounce', exact: true, component: OriginDebounce },
  { key: 2, path: '/originthrottle', exact: true, component: OriginThrottle },
  { key: 3, path: '/rxjsdebounce', exact: true, component: RxjsDebounce },
  { key: 4, path: '/rxjsthrottle', exact: true, component: RxjsThrottle },
  { key: 5, path: '/rxjsretry', exact: true, component: RxjsRetry },
  { key: 6, path: '/subject', exact: true, component: Subject },
  { key: 7, path: '/operators', exact: true, component: Operators },
  { key: 8, path: '/retrybackoff', exact: true, component: RetryBackoff },
  { key: 9, path: '/rxjshooksuseobservable', exact: true, component: RxjsHooksUseObservable },
  { key: 10, path: '/rxjshooksuseeventcallback', exact: true, component: RxjsHooksUseEventCallback },
  { key: 11, path: '/observable', exact: true, component: Observable },
]

class App extends Component {
  render() {
    return (
        <Fragment>
          <BrowserRouter>
            {routers.map(item => {
              return <Route key={item.key} path={item.path} exact={item.exact} component={item.component} />
            })}
          </BrowserRouter>
        </Fragment>
      );
  }
}

export default App;
