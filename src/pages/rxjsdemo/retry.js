import React, { Component } from 'react'
import { Button } from 'antd'
import { interval } from 'rxjs'
import { take, map, retryWhen, delay } from 'rxjs/operators';



class Retry extends Component {
  
  handleClick = () => {
    let flat = 0
    const observe = {
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (error) => console.log(error)
    }
    
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
      retryWhen(err$ => {
        // flat++
        return err$.pipe(
          delay(1000),
          take(3)
        )
      })
    )
    this.data$.subscribe(observe)
  }

  render() { 
    return ( 
      <div>
        <Button type='primary' onClick={this.handleClick}>retry</Button>
      </div>
     );
  }
}
 
export default Retry;
