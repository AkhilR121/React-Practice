export type CounterViewProps = {
  readonly count: number;
  onInc(): void;
  onDec(): void;
};

export const CounterView = ({ count, onInc, onDec }: CounterViewProps) => {
  return (
    <div className="m-4 flex w-24 flex-col">
      <button className=" bg-blue-800 p-2 text-gray-200" onClick={onInc}>
        Increment
      </button>
      <div className="m-1 text-center text-2xl">{count}</div>
      <button className=" bg-blue-800 p-2 text-gray-200" onClick={onDec}>
        Decrement
      </button>
    </div>
  );
};
