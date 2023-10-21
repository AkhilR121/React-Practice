"use strict";
exports.__esModule = true;
exports.CounterView = void 0;
var CounterView = function (_a) {
    var count = _a.count, onInc = _a.onInc, onDec = _a.onDec;
    return (<div className="m-4 flex w-24 flex-col">
      <button className=" bg-blue-800 p-2 text-gray-200" onClick={onInc}>
        Increment
      </button>
      <div className="m-1 text-center text-2xl">{count}</div>
      <button className=" bg-blue-800 p-2 text-gray-200" onClick={onDec}>
        Decrement
      </button>
    </div>);
};
exports.CounterView = CounterView;
