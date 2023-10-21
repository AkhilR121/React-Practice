// import { useReducer } from "react";
import clsx from "clsx";
import { useImmerReducer } from "use-immer";

export function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, { count: 0 });
  function handleInc() {
    dispatch({ type: "inc_count" });
  }
  function handleDec() {
    dispatch({ type: "dec_count" });
  }

  return (
    <div className="container m-auto mt-[200px] flex flex-col gap-4 text-2xl">
      <div className="flex items-center justify-center">
        <button
          onClick={handleInc}
          className="rounded-lg border-2 border-black p-3 px-5 font-bold"
        >
          +
        </button>
        <div
          className={clsx(
            "m-8 w-40 rounded-lg bg-red-500 p-5 text-center text-3xl font-bold shadow-2xl shadow-red-500",
            { "text-blue-500": state.count < 0 }
          )}
        >
          {state.count}
        </div>
        <button
          onClick={handleDec}
          className="rounded-lg border-2 border-black p-3 px-5 font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
}

type Action = { type: "inc_count" } | { type: "dec_count" } | { type: "reset" };

function reducer(draft: { count: number }, action: Action): { count: number } {
  switch (action.type) {
    case "inc_count": {
      return {
        count: draft.count + 1,
      };
    }
    case "dec_count": {
      return {
        count: draft.count - 1,
      };
    }
    default:
      return draft;
  }
}
