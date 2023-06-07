import { CounterView } from "./examples/counter/CounterView";

export const App = () => {
  return <CounterView count={100} onInc={console.log} onDec={console.log} />;
};
