"use strict";
exports.__esModule = true;
exports.AddTask = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
function AddTask(_a) {
    var handleClickAdd = _a.handleClickAdd;
    var _b = (0, react_1.useState)(""), text = _b[0], setText = _b[1];
    return (<div className="my-5 flex items-center justify-center">
      <input className="w-[80%] rounded-l-full p-4 caret-pink-500 shadow-xl outline-none" type="text" placeholder="Add List" value={text} onChange={function (e) {
            setText(e.target.value);
        }}/>
      <framer_motion_1.AnimatePresence>
        <framer_motion_1.motion.button whileTap={{ scale: 1.1 }} className="rounded-r-full bg-green-700 p-3 shadow-2xl" onClick={function () {
            handleClickAdd(text);
            setText("");
        }}>
          <i className="bi bi-plus-lg text-[21px]"></i>
        </framer_motion_1.motion.button>
      </framer_motion_1.AnimatePresence>
    </div>);
}
exports.AddTask = AddTask;
