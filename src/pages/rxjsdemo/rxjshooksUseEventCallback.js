import React from "react";
import { useEventCallback } from "rxjs-hooks";
import { map } from "rxjs/operators";
import { Button } from 'antd'

export default function App() {
  const [clickCallback, [description, x, y]] = useEventCallback((event$) =>
    event$.pipe(
      map((event) => [event.target.innerText, event.clientX, event.clientY]),
    ),
    ["nothing", 0, 0],
  )

  return (
    <div>
      <h1>当前按钮clientX: {x},clientY: {y}</h1>
      <h1>当前点击按钮{description}</h1>
      <Button type='primary' onClick={clickCallback}>click me</Button>
      <Button type='dashed' onClick={clickCallback}>click you</Button>
      <Button type='default' onClick={clickCallback}>click him</Button>
    </div>
  );
}