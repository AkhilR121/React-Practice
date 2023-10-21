"use strict";
exports.__esModule = true;
exports.ResetTimer = void 0;
var framer_motion_1 = require("framer-motion");
function ResetTimer(_a) {
    var dispatch = _a.dispatch;
    return (<button onClick={function () {
            dispatch({ type: "reset" });
        }} className="bg-white p-3 px-6 outline-none">
      <framer_motion_1.motion.div animate={{ rotate: 360 }} whileTap={{ rotate: 60, scale: 1.2 }}>
        <ResetIcon />
      </framer_motion_1.motion.div>
    </button>);
}
exports.ResetTimer = ResetTimer;
function ResetIcon() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
    </svg>);
}
