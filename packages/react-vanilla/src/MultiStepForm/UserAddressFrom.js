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
exports.UserAddress = void 0;
var framer_motion_1 = require("framer-motion");
var jotai_1 = require("jotai");
var use_immer_1 = require("use-immer");
var GlobalState_1 = require("./GlobalState");
function UserAddress() {
    var userAddressAtom = (0, jotai_1.useAtomValue)(GlobalState_1.addressAtom);
    var setUserAtom = (0, jotai_1.useSetAtom)(GlobalState_1.addressAtom);
    var _a = (0, use_immer_1.useImmerReducer)(reducer, userAddressAtom), address = _a[0], dispatch = _a[1];
    return (<framer_motion_1.motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }} transition={{ duration: 0.4 }} className="flex flex-col gap-3 text-xl font-semibold">
      <h1 className="mb-3 text-center text-3xl font-bold underline">
        Personal Details
      </h1>
      <div className="flex items-center gap-5">
        <label>Street: </label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={address.street} onChange={function (e) {
            dispatch({ type: "street", street: e.target.value, setUserAtom: setUserAtom });
        }} type="text" required/>
      </div>
      <div className="flex items-center gap-9">
        <label>City: </label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={address.city} onChange={function (e) {
            dispatch({ type: "city", city: e.target.value, setUserAtom: setUserAtom });
        }} type="text" required/>
      </div>
      <div className="flex items-center gap-7">
        <label>State: </label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={address.state} onChange={function (e) {
            dispatch({ type: "state", state: e.target.value, setUserAtom: setUserAtom });
        }} type="text" required/>
      </div>
      <div className="flex items-center gap-11">
        <label>Zip: </label>
        <input className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none" value={address.zip} onChange={function (e) {
            dispatch({ type: "zip", zip: e.target.value, setUserAtom: setUserAtom });
        }} type="number" required/>
      </div>
    </framer_motion_1.motion.div>);
}
exports.UserAddress = UserAddress;
function reducer(draft, action) {
    switch (action.type) {
        case "street": {
            draft.street = action.street;
            action.setUserAtom(__assign({}, draft));
            break;
        }
        case "city": {
            draft.city = action.city;
            action.setUserAtom(__assign({}, draft));
            break;
        }
        case "state": {
            draft.state = action.state;
            action.setUserAtom(__assign({}, draft));
            break;
        }
        case "zip": {
            draft.zip = action.zip;
            action.setUserAtom(__assign({}, draft));
            break;
        }
    }
}
