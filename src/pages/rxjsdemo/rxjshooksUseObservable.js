import React from "react";
import { useObservable } from "rxjs-hooks";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

function RxjsHooks() {
  const value = useObservable(() => interval(500).pipe(map((val) => val * 3)));

  return (
    <div className="App">
      <h1>当前value: {value}</h1>
    </div>
  );
}

export default RxjsHooks
