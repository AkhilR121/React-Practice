import { Button, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { produce } from "immer";

type State = {
  count: number;
};

type Action = {
  type: "inc" | "dec";
};

function counterReducer(state: State, action: Action) {
  return action.type === "inc"
    ? produce(state, draft => ({ count: draft.count + 1 }))
    : produce(state, draft => ({ count: draft.count - 1 }));
}

export function Counter() {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  const incCount = () => {
    dispatch({ type: "inc" });
  };

  const decCount = () => {
    dispatch({ type: "dec" });
  };

  return (
    <VStack>
      <HStack spacing="25px">
        <div>{state.count}</div>
        <VStack spacing="35px">
          <Button onClick={incCount}>+</Button>
          <Button onClick={decCount}>-</Button>
        </VStack>
      </HStack>
    </VStack>
  );
}
