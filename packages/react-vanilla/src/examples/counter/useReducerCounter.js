"use strict";
exports.__esModule = true;
exports.ReducerCounter = void 0;
var react_1 = require("react");
var CounterView_1 = require("./CounterView");
var counterReducer = function (state, action) {
    switch (action.type) {
        case "inc":
            return { count: state.count + 1 };
        case "dec":
            return { count: state.count - 1 };
    }
};
var ReducerCounter = function () {
    var _a = react_1["default"].useReducer(counterReducer, { count: 0 }), state = _a[0], dispatch = _a[1];
    var inc = function () {
        dispatch({ type: "inc" });
    };
    var dec = function () {
        dispatch({ type: "dec" });
    };
    return <CounterView_1.CounterView count={state.count} onInc={inc} onDec={dec}/>;
};
exports.ReducerCounter = ReducerCounter;
