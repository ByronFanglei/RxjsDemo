import React, { Component } from 'react'
import { Input } from 'antd'
import { fromEvent, of } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

export default class RxjsDebounce extends Component {
  componentDidMount() {
    this.click$ = fromEvent(document.querySelector('#inp'), 'input')
    .pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      switchMap(searchTerm => of(searchTerm))
    )
    this.sub$ = this.click$.subscribe(data => console.log(data.target.value))
  }
  componentWillUnmount() {
    this.sub$.unsubscribe()
  }

  render() { 
    return ( 
      <div>
        <Input style={{width: '200px' }} id='inp' ></Input>
      </div>
     );
  }
}
