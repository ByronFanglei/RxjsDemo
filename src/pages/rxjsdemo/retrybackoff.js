import React, { Component } from 'react'
import { Button } from 'antd'
import { interval, range, of, zip, throwError, timer } from 'rxjs'
import { tap, take, map, retryWhen, mergeMap } from 'rxjs/operators';



class Retry extends Component {
  
  handleClick = () => {
    let flat = 0

    this.data$ = interval(300)
    .pipe(
      map(() => {
        let random = Math.floor(Math.random() * 10)
        if (random !== 2) {
          return random
        } else {
          flat++
          console.log(`尝试第${flat}次`)
          throw new Error('error')
        }
      }),
      retryWhen(err$ =>
        zip(range(1, 6), err$).pipe(
          mergeMap(([i, err]) => (i > 5) ? throwError(err) : of(i)),
          map(i => i * i),
          mergeMap(v => timer(v * 1000)),
          take(5)
      )),
      tap(data => console.log(data))
    )
    this.data$.subscribe()
  }

  render() { 
    return ( 
      <div>
        <Button type='primary' onClick={this.handleClick}>retry-backoff</Button>
      </div>
     );
  }
}
 
export default Retry;
