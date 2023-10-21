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
exports.AccountForm = void 0;
var framer_motion_1 = require("framer-motion");
var jotai_1 = require("jotai");
var use_immer_1 = require("use-immer");
var GlobalState_1 = require("./GlobalState");
function AccountForm() {
    var userAccountAtom = (0, jotai_1.useAtomValue)(GlobalState_1.accountAtom);
    var setUserAtom = (0, jotai_1.useSetAtom)(GlobalState_1.accountAtom);
    var _a = (0, use_immer_1.useImmerReducer)(reducer, userAccountAtom), state = _a[0], dispatch = _a[1];
    return (<framer_motion_1.motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }} transition={{ duration: 0.4 }} className="flex flex-col gap-3 text-xl font-semibold">
      <h1 className="mb-4 text-center text-3xl font-bold underline">
        Account Details
      </h1>

      <div className="flex items-center gap-10">
        <label>Email: </label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={state.email} onChange={function (e) {
            dispatch({ type: "email", email: e.target.value, setUserAtom: setUserAtom });
        }} type="email" required/>
      </div>
      <div>
        <label>Password: </label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={state.password} onChange={function (e) {
            dispatch({
                type: "password",
                password: e.target.value,
                setUserAtom: setUserAtom
            });
        }} type="password" required/>
      </div>
    </framer_motion_1.motion.div>);
}
exports.AccountForm = AccountForm;
function reducer(draft, action) {
    switch (action.type) {
        case "email": {
            draft.email = action.email;
            action.setUserAtom(__assign({}, draft));
            break;
        }
        case "password": {
            draft.password = action.password;
            action.setUserAtom(__assign({}, draft));
        }
    }
}
