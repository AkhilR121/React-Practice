import { Button } from "@chakra-ui/react";
import React, { Reducer } from "react";
import { produce } from "immer";
import "./Counter.css";

type State = {
  count: number;
};

type Action = {
  type: "inc" | "dec";
};

const counterReducer: Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  return action.type === "inc"
    ? produce(state, draft => {
        draft.count += 1;
      })
    : produce(state, draft => {
        draft.count -= 1;
      });
};

export function CounterView() {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  const incCount = () => {
    dispatch({ type: "inc" });
  };

  const decCount = () => {
    dispatch({ type: "dec" });
  };

  return (
    <div className="container flex-row">
      <div className="display">{state.count}</div>
      <div className="flex-col">
        <Button onClick={incCount}>+</Button>
        <Button onClick={decCount}>-</Button>
      </div>
    </div>
  );
}
