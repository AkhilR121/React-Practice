import { InitialState } from "./TimerApp";

export function Timer({ state }: { state: InitialState[] }) {
  return (
    <div className="flex items-center gap-5 text-6xl">
      {state.map(s => {
        return (
          <div key={s.hours} className="flex gap-5">
            <div className="bg-gray-400 p-3">
              {s.hours < 10 ? "0" + s.hours : s.hours}
            </div>
            <span>:</span>
            <div className="bg-gray-400 p-3">
              {s.minutes < 10 ? "0" + s.minutes : s.minutes}
            </div>
            <span>:</span>
            <div className="bg-gray-400 p-3">
              {s.seconds < 10 ? "0" + s.seconds : s.seconds}
            </div>
          </div>
        );
      })}
    </div>
  );
}
