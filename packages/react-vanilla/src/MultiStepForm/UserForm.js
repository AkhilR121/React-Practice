"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.reducer = exports.UserForm = void 0;
var framer_motion_1 = require("framer-motion");
var jotai_1 = require("jotai");
var use_immer_1 = require("use-immer");
var GlobalState_1 = require("./GlobalState");
function UserForm() {
    var userFormData = (0, jotai_1.useAtomValue)(GlobalState_1.userAtom);
    var setUserAtom = (0, jotai_1.useSetAtom)(GlobalState_1.userAtom);
    var _a = (0, use_immer_1.useImmerReducer)(reducer, userFormData), state = _a[0], dispatch = _a[1];
    return (<framer_motion_1.motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }} transition={{ duration: 0.4 }} className="flex flex-col gap-3 text-xl font-semibold">
      <h1 className="mb-4 text-center text-3xl font-bold underline">
        User Form Details
      </h1>
      <div className="flex items-center gap-5">
        <label>First Name:</label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={state.firstName} onChange={function (e) {
            dispatch({
                type: "firstName",
                firstName: e.target.value,
                setUserAtom: setUserAtom
            });
        }} type="text" required/>
      </div>
      <div className="flex items-center gap-5">
        <label>Last Name:</label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={state.lastName} onChange={function (e) {
            dispatch({
                type: "lastName",
                lastName: e.target.value,
                setUserAtom: setUserAtom
            });
        }} type="text" required/>
      </div>
      <div className="flex items-center gap-20">
        <label>Age:</label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={state.age} onChange={function (e) {
            dispatch({ type: "age", age: e.target.value, setUserAtom: setUserAtom });
        }} type="number" min={1} required/>
      </div>
    </framer_motion_1.motion.div>);
}
exports.UserForm = UserForm;
function reducer(draft, action) {
    switch (action.type) {
        case "firstName": {
            draft.firstName = action.firstName;
            action.setUserAtom(__assign({}, draft));
            break;
        }
        case "lastName": {
            draft.lastName = action.lastName;
            action.setUserAtom(__assign({}, draft));
            break;
        }
        case "age": {
            draft.age = action.age;
            action.setUserAtom(__assign({}, draft));
            break;
        }
    }
}
exports.reducer = reducer;
