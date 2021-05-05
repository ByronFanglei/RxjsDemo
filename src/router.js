import Routers from './model/router'
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

const Router = [
   new Routers('/', true, Home),
   new Routers('/origindebounce', true, OriginDebounce),
   new Routers('/originthrottle', true, OriginThrottle),
   new Routers('/rxjsdebounce', true, RxjsDebounce),
   new Routers('/rxjsthrottle', true, RxjsThrottle),
   new Routers('/rxjsretry', true, RxjsRetry),
   new Routers('/subject', true, Subject),
   new Routers('/operators', true, Operators),
   new Routers('/retrybackoff', true, RetryBackoff),
   new Routers('/rxjshooksuseobservable', true, RxjsHooksUseObservable),
   new Routers('/rxjshooksuseeventcallback', true, RxjsHooksUseEventCallback),
   new Routers('/observable', true, Observable),
 ] 

export default Router
