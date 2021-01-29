import React, { Component } from 'react'
import { Button } from 'antd'
import { Subject, fromEvent } from 'rxjs'
import { throttleTime } from 'rxjs/operators'


class SubjectDemo extends Component {

  hanldsClick = () => {
    // 主体
    this.subject = new Subject()
    // 可观察对象
    this.click$ = fromEvent(document.getElementById('drags'), 'drag').pipe(throttleTime(500))
    // 可观察对象订阅主体
    this.click$.subscribe(this.subject)
    // 观察者
    this.observeX = {next: (x => console.log(`观察者observeX: ${x.clientX}`))}
    this.observeY = {next: (x => console.log(`观察者observeY: ${x.clientY}`))}
    // 主体订阅观察者
    this.sub1$ = this.subject.subscribe(this.observeX)
    this.sub2$ = this.subject.subscribe(this.observeY)
  }

  hanldsCancle = () => {
    this.sub1$.unsubscribe()
    this.sub2$.unsubscribe()
  }

  render() { 
    return ( 
      <div>
        <Button type="primary" onClick={this.hanldsClick} >click</Button>
        <Button type="primary" onClick={this.hanldsCancle} >cancle</Button>
        <div
          id='drags'
          draggable={true}
          style={{ width:'100px', height: '100px', backgroundColor: '#ff6700' }}
        ></div>
      </div>
     );
  }
}
 
export default SubjectDemo;