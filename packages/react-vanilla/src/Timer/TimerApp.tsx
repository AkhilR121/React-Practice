import { Draft } from "immer";
import { useRef } from "react";
import { useImmerReducer } from "use-immer";
import { ResetTimer } from "./ResetTimer";
import { StartStopTimer } from "./StartStopTimer";
import { Timer } from "./Timer";

export type InitialState = Readonly<{
  hours: number;
  minutes: number;
  seconds: number;
}>;
export type Action = { type: "seconds" } | { type: "reset" };

const initialState: InitialState[] = [{ hours: 0, minutes: 0, seconds: 0 }];

export function TimerApp() {
  const [state, dispatch] = useImmerReducer<Draft<InitialState[]>, Action>(
    timerReducer,
    initialState
  );
  const interval = useRef<NodeJS.Timer>();

  function startTimer() {
    interval.current = setInterval(() => {
      dispatch({ type: "seconds" });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval.current);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <div>
        <Timer state={state} />
      </div>
      <div className="flex gap-5">
        <div>
          <StartStopTimer start={startTimer} stop={stopTimer} />
        </div>
        <div>
          <ResetTimer dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

function timerReducer(draft: Draft<InitialState[]>, action: Action) {
  switch (action.type) {
    case "seconds": {
      draft.map(d => {
        d.seconds += 1;
        if (d.seconds === 60) {
          d.seconds = 0;
          d.minutes += 1;
          if (d.minutes === 60) {
            d.minutes = 0;
            d.hours += 1;
          }
        }
      });
      break;
    }
    case "reset": {
      draft.map(d => {
        d.seconds = 0;
        d.minutes = 0;
        d.hours = 0;
      });
      break;
    }
  }
}
