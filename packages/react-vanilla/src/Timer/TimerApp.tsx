import { useImmerReducer } from "use-immer";
import { ResetTimer } from "./ResetTimer";
import { StopTimer } from "./StopTimer";
import { Timer } from "./Timer";

type InitialState = { hours: number; minutes: number; seconds: number };

const initialState: InitialState[] = [{ hours: 0, minutes: 0, seconds: 0 }];
export function TimerApp() {
  const [state, dispatch] = useImmerReducer(timerReducer, initialState);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <div>
        <Timer />
      </div>
      <div className="flex gap-5">
        <div>
          <StopTimer dispatch={dispatch} />
        </div>
        <div>
          <ResetTimer />
        </div>
      </div>
    </div>
  );
}

function timerReducer(draft: any, action: any) {
  const counter = 0;
}
