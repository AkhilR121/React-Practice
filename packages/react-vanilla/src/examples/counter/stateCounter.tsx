import { state } from "@ti/react";
import { CounterView } from "./CounterView";

const useCounter = state(
  { count: 0 },
  {
    inc(draft) {
      draft.count++;
    },
    dec(draft) {
      draft.count--;
    },
  }
);

export const StateCounter = () => {
  const [state, actions] = useCounter();

  return (
    <CounterView count={state.count} onInc={actions.inc} onDec={actions.dec} />
  );
};
