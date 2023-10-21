"use strict";
exports.__esModule = true;
exports.StopTimer = void 0;
var use_immer_1 = require("use-immer");
function StopTimer(_a) {
    var dispatch = _a.dispatch;
    var _b = (0, use_immer_1.useImmer)(true), toggle = _b[0], setToggle = _b[1];
    return (<button onClick={function () {
            setToggle(!toggle);
        }} className="bg-green-400 p-3 text-2xl font-semibold">
      {toggle ? "Start" : "Stop"}
    </button>);
}
exports.StopTimer = StopTimer;
