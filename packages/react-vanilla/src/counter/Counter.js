"use strict";
exports.__esModule = true;
exports.Counter = void 0;
// import { useReducer } from "react";
var clsx_1 = require("clsx");
var use_immer_1 = require("use-immer");
require("./counter.css");
function Counter() {
    var _a = (0, use_immer_1.useImmerReducer)(reducer, { count: 0 }), state = _a[0], dispatch = _a[1];
    function handleInc() {
        dispatch({ type: "inc_count" });
    }
    function handleDec() {
        dispatch({ type: "dec_count" });
    }
    return (<div className="container m-auto mt-[200px] flex flex-col gap-4 text-2xl">
      <div className="flex items-center justify-center">
        <button onClick={handleInc} className="rounded-lg border-2 border-black p-3 px-5 font-bold">
          +
        </button>
        <div className={(0, clsx_1["default"])("m-8 w-40 rounded-lg bg-red-500 p-5 text-center text-3xl font-bold shadow-2xl shadow-red-500", { "text-blue-500": state.count < 0 })}>
          {state.count}
        </div>
        <button onClick={handleDec} className="rounded-lg border-2 border-black p-3 px-5 font-bold">
          -
        </button>
      </div>
    </div>);
}
exports.Counter = Counter;
function reducer(draft, action) {
    switch (action.type) {
        case "inc_count": {
            return {
                count: draft.count + 1
            };
        }
        case "dec_count": {
            return {
                count: draft.count - 1
            };
        }
        default:
            return draft;
    }
}
