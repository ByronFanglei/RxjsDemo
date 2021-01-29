import React, { Component } from 'react'
import { fromEvent } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

class Throttle extends Component {
  componentDidMount() {
    this.click$ = fromEvent(document.querySelector('#drags'), 'drag')
    .pipe(throttleTime(500))
    this.sub$ = this.click$.subscribe(data => console.log(`X: ${data.clientX}, Y: ${data.clientY}`))
  }

  componentWillUnmount() {
    this.sub$.unsubscribe()
  }

  render() { 
    return ( 
      <div
        id='drags'
        style={{width: '100px', height: '100px', backgroundColor: '#ff6700'}}
        draggable={true}
      ></div>
     );
  }
}
 
export default Throttle;