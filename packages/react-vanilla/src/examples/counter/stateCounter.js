"use strict";
exports.__esModule = true;
exports.StateCounter = void 0;
var react_1 = require("@ti/react");
var CounterView_1 = require("./CounterView");
var useCounter = (0, react_1.state)({ count: 0 }, {
    inc: function (draft) {
        draft.count++;
    },
    dec: function (draft) {
        draft.count--;
    }
});
var StateCounter = function () {
    var _a = useCounter(), state = _a[0], actions = _a[1];
    return (<CounterView_1.CounterView count={state.count} onInc={actions.inc} onDec={actions.dec}/>);
};
exports.StateCounter = StateCounter;
