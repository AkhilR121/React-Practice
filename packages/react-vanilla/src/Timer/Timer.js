"use strict";
exports.__esModule = true;
exports.Timer = void 0;
function Timer(_a) {
    var state = _a.state;
    return (<div className="flex items-center gap-5 font-['Inter'] font-extralight text-gray-900">
      {state.map(function (s) {
            return (<div key={s.hours} className="flex items-center gap-5">
            <div className="flex w-44 flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-2xl">
              <div className="text-8xl">
                {s.hours < 10 ? "0" + s.hours : s.hours}
              </div>
              <p className="text-lg">Hours</p>
            </div>
            <span>:</span>
            <div className="flex w-44 flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-2xl">
              <div className="text-8xl">
                {s.minutes < 10 ? "0" + s.minutes : s.minutes}
              </div>
              <p className="text-lg">Minutes</p>
            </div>
            <span>:</span>
            <div className="flex w-44 flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-2xl">
              <div className="text-8xl">
                {s.seconds < 10 ? "0" + s.seconds : s.seconds}
              </div>
              <p className="text-lg">Seconds</p>
            </div>
          </div>);
        })}
    </div>);
}
exports.Timer = Timer;
