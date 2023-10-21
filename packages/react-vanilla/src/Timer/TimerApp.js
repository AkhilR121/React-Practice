"use strict";
exports.__esModule = true;
exports.TimerApp = void 0;
var react_1 = require("react");
var use_immer_1 = require("use-immer");
var ResetTimer_1 = require("./ResetTimer");
var StartStopTimer_1 = require("./StartStopTimer");
var Timer_1 = require("./Timer");
var initialState = [{ hours: 0, minutes: 0, seconds: 0 }];
function TimerApp() {
    var _a = (0, use_immer_1.useImmerReducer)(timerReducer, initialState), state = _a[0], dispatch = _a[1];
    var interval = (0, react_1.useRef)();
    function startTimer() {
        interval.current = setInterval(function () {
            dispatch({ type: "seconds" });
        }, 1000);
    }
    function stopTimer() {
        clearInterval(interval.current);
    }
    return (<div className="flex h-screen flex-col items-center justify-center gap-5 bg-[#DFE19F]">
      <div>
        <Timer_1.Timer state={state}/>
      </div>
      <div className="m-10 flex gap-10">
        <div>
          <StartStopTimer_1.StartStopTimer start={startTimer} stop={stopTimer}/>
        </div>
        <div>
          <ResetTimer_1.ResetTimer dispatch={dispatch}/>
        </div>
      </div>
    </div>);
}
exports.TimerApp = TimerApp;
function timerReducer(draft, action) {
    switch (action.type) {
        case "seconds": {
            draft.map(function (d) {
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
            draft.map(function (d) {
                d.seconds = 0;
                d.minutes = 0;
                d.hours = 0;
            });
            break;
        }
    }
}
