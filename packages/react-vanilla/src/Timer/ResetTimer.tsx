import { Action } from "./TimerApp";

export function ResetTimer({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "reset" });
      }}
      className="bg-red-400 p-3 text-2xl font-semibold"
    >
      Reset
    </button>
  );
}
