import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'

export default class Home extends Component {

  render() {
    return(
      <>
        <Button type="primary" onClick={() => this.props.history.push('/origindebounce')}>原生防抖</Button>
        <Button type="primary" onClick={() => this.props.history.push('/originthrottle')}>原生节流</Button>

        <br />

        <Button type="primary" onClick={() => this.props.history.push('/observable')}>Observable</Button>
        <Button type="primary" onClick={() => this.props.history.push('/rxjsdebounce')}>rxjs防抖</Button>
        <Button type="primary" onClick={() => this.props.history.push('/rxjsthrottle')}>rxjs节流</Button>
        <Button type="primary" onClick={() => this.props.history.push('/rxjsretry')}>rxjs-retry</Button>
        <Button type="primary" onClick={() => this.props.history.push('/retrybackoff')}>retrybackoff</Button>
        <Button type="primary" onClick={() => this.props.history.push('/subject')}>Subject</Button>
        <Button type="primary" onClick={() => this.props.history.push('/operators')}>常用Operators</Button>
        <Button type="primary" onClick={() => this.props.history.push('/rxjshooksuseobservable')}>rxjshooksUseObservable</Button>
        <Button type="primary" onClick={() => this.props.history.push('/rxjshooksuseeventcallback')}>rxjshooksUseEventCallback</Button>
        
        <h2>30天RxJS</h2>

        <Button type="primary" onClick={() => this.props.history.push('/day3')}>Day3(简易计数器)</Button>

      </>
    )
  }
}