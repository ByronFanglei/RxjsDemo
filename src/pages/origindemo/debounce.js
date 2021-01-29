import React, { Component } from 'react'
import { Input } from 'antd'

export default class RxjsDebounce extends Component {
  
  _handleInp = (e) => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      console.log(e.nativeEvent.target.value)
      this.timer = null
    }, 1000)
  }

  render() { 
    return ( 
      <div>
        <Input style={{width: '200px' }} onChange={this._handleInp} ></Input>
      </div>
     );
  }
}
