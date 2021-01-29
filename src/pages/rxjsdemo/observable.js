import React, { Component } from 'react';
import { Button } from 'antd'
import { fromEvent } from 'rxjs';
import { take, map } from 'rxjs/operators'

class Observable extends Component {

  componentDidMount() {
    let div1 = document.querySelector('#div1')

    // 观察者
    this.Observer = {
      next: (data) => console.log(data),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    }

    // 可观察对象
    this.click$ = fromEvent(div1, 'click')

    // 可观察对象添加Operators操作符
    this.sub$ =  this.click$.pipe(
      // Operators操作符
      map(e => e.target.innerHTML),
      take(5)
    )
  }

  handleClick = () => {
    // 开启订阅
    this.unsub$ = this.sub$.subscribe(this.Observer)
  }

  handleCancel = () => {
    // 取消订阅
    this.unsub$.unsubscribe()
  }

  render() {
    return (
      <div>
        <Button type='primary' onClick={this.handleClick} >订阅</Button>
        <Button type='primary' onClick={this.handleCancel} >取消</Button>
        <div 
          style={{width: '200px', height: '200px', backgroundColor:'#ff6700', color: '#fff', fontSize: '48px', textAlign: 'center', lineHeight: '200px'}} 
          id='div1'
        >Rxjs</div>
      </div>
    );
  }
}

export default Observable;
