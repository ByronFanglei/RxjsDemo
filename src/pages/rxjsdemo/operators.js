import React, { Component } from 'react'
import { Button } from 'antd'
import { interval, from } from 'rxjs'
import { take, bufferTime, bufferCount, distinct, distinctUntilChanged } from 'rxjs/operators'

class Operators extends Component {

  _take = () => {
    this.click$ = interval(300)
    .pipe(take(5))
    .subscribe(data => console.log(data))
  }

  _bufferTime = () => {
    this.click$ = interval(300)
    .pipe(bufferTime(1000))
    .subscribe(data => console.log(data))
  }

  _bufferCount = () => {
    this.click$ = interval(300)
    .pipe(bufferCount(5))
    .subscribe(data => console.log(data))
  }

  _distinct = () => {
    console.log('打印原始数组', [1, 2, 3, 3, 2, 1, 'a', 'b', 'b'])
    this.click$ = from([1, 2, 3, 3, 2, 1, 'a', 'b', 'b'])
    .pipe(distinct())
    .subscribe(data => console.log(data))
  }

  _distinctUntilChanged = () => {
    console.log('打印原始数组', [1, 2, 3, 3, 2, 1, 'a', 'b', 'b'])
    this.click$ = from([1, 2, 3, 3, 2, 1, 'a', 'b', 'b'])
    .pipe(distinctUntilChanged())
    .subscribe(data => console.log(data))
  }
  // 取消订阅
  handleCancle = () => {
    this.click$ && this.click$.unsubscribe()
  }

  render() { 
    return ( 
      <div>
        <Button type="primary" onClick={this._take} >take</Button>
        <Button type="primary" onClick={this._bufferTime} >bufferTime</Button>
        <Button type="primary" onClick={this._bufferCount} >bufferCount</Button>
        <Button type="primary" onClick={this._distinct} >distinct</Button>
        <Button type="primary" onClick={this._distinctUntilChanged} >distinctUntilChanged</Button>
        <br />
        <Button type='dashed' onClick={this.handleCancle} >unsubscribe</Button>
      </div>
     );
  }
}
 
export default Operators;