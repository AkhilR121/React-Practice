"use strict";
exports.__esModule = true;
exports.useMultiStepForm = void 0;
var use_immer_1 = require("use-immer");
function useMultiStepForm(steps) {
    var _a = (0, use_immer_1.useImmer)(0), currStep = _a[0], setCurrStep = _a[1];
    function next() {
        setCurrStep(function (i) {
            if (i >= steps.length - 1)
                return i;
            return i + 1;
        });
    }
    function back() {
        setCurrStep(function (i) {
            if (i <= 0)
                return i;
            return i - 1;
        });
    }
    function goto(index) {
        setCurrStep(index);
    }
    return {
        currStep: currStep,
        step: steps[currStep],
        steps: steps,
        goto: goto,
        next: next,
        back: back
    };
}
exports.useMultiStepForm = useMultiStepForm;
