"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var react_1 = require("react");
var CounterView_1 = require("./CounterView");
var Counter = function () {
    var _a = react_1["default"].useState({ count: 0 }), state = _a[0], setState = _a[1];
    var inc = function () {
        setState(function (state) { return ({ count: state.count + 1 }); });
    };
    var dec = function () {
        setState(function (state) { return ({ count: state.count - 1 }); });
    };
    return <CounterView_1.CounterView count={state.count} onInc={inc} onDec={dec}/>;
};
exports.Counter = Counter;
