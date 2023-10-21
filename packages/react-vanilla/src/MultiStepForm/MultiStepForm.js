"use strict";
exports.__esModule = true;
exports.MultiStepForm = void 0;
var framer_motion_1 = require("framer-motion");
var AccountForm_1 = require("./AccountForm");
var UseMultiStepForm_1 = require("./UseMultiStepForm");
var UserAddressFrom_1 = require("./UserAddressFrom");
var UserForm_1 = require("./UserForm");
function MultiStepForm() {
    var _a = (0, UseMultiStepForm_1.useMultiStepForm)([
        <UserForm_1.UserForm />,
        <UserAddressFrom_1.UserAddress />,
        <AccountForm_1.AccountForm />,
    ]), steps = _a.steps, currStep = _a.currStep, step = _a.step, back = _a.back, next = _a.next;
    function onSubmit(e) {
        e.preventDefault();
        if (currStep !== steps.length - 1)
            next();
        alert("Applied Successfully");
    }
    return (<div className="flex h-screen items-center justify-center border-2">
      <form onSubmit={onSubmit} className="relative h-[28rem] rounded-3xl bg-purple-600 shadow-2xl shadow-purple-600 [&>*]:m-5">
        <div className="absolute bottom-5 left-[45%] text-xl font-bold">
          {currStep + 1} of {steps.length}
        </div>
        <div className="flex h-[20rem] w-[40rem] justify-center">{step}</div>
        <div className="relative text-lg font-semibold">
          {currStep !== 0 && (<framer_motion_1.motion.button whileTap={{ x: -10 }} type="button" onClick={back} className="absolute left-16 rounded-full border-2 p-4 px-7">
              Back
            </framer_motion_1.motion.button>)}

          {currStep !== steps.length - 1 ? (<framer_motion_1.motion.button whileTap={{ x: 10 }} type="button" onClick={next} className="absolute right-16 rounded-full border-2 p-4 px-7">
              Next
            </framer_motion_1.motion.button>) : (<button type="submit" className="absolute right-16 rounded-full border-2 p-4 px-7">
              Finish
            </button>)}
        </div>
      </form>
    </div>);
}
exports.MultiStepForm = MultiStepForm;
