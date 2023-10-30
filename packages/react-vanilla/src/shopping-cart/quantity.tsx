import { MinusIcon, PlusIcon } from "./shopping-icons";

export function Quantity({
  quantity,
  onInc,
  onDec,
}: {
  quantity: number;
  onInc: () => void;
  onDec: () => void;
}) {
  return (
    <>
      <div className="mr-12 flex flex-col items-center">
        <button
          onClick={e => {
            e.preventDefault();
            onDec();
          }}
          className="rounded-full bg-slate-600 px-2"
        >
          <MinusIcon />
        </button>
        <div className={"text-xl font-medium"}>{quantity}</div>
        <button
          onClick={e => {
            e.preventDefault();
            onInc();
          }}
          className="rounded-full  bg-slate-600 px-2"
        >
          <PlusIcon />
        </button>
      </div>
    </>
  );
}
