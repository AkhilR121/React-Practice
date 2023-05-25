import React from "react";
import { CounterView } from "./CounterView";

type Action = { type: "inc" } | { type: "dec" };
type State = { count: number };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
  }
};

export const ReducerCounter = () => {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const dec = () => {
    dispatch({ type: "dec" });
  };

  return <CounterView count={state.count} onInc={inc} onDec={dec} />;
};
