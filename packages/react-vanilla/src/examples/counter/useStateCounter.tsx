import React from "react";
import { CounterView } from "./CounterView";

export const Counter = () => {
  const [state, setState] = React.useState({ count: 0 });

  const inc = () => {
    setState(state => ({ count: state.count + 1 }));
  };

  const dec = () => {
    setState(state => ({ count: state.count - 1 }));
  };

  return <CounterView count={state.count} onInc={inc} onDec={dec} />;
};
