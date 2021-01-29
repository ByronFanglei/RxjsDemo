import React, { Component } from 'react'

class Throttle extends Component {
  componentDidMount() {
    this.drags = document.getElementById('drags')
    this.drags.addEventListener('drag', this._throttle(function(e){
      console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
    }))
  }

  componentWillUnmount() {
    this.drags.removeEventListener('drag', this._throttle)
  }

  _throttle = (fun, time = 500) => {
    let timer = null
    return function() {
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        fun.apply(fun, arguments)
        timer = null
      }, time)
    }
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