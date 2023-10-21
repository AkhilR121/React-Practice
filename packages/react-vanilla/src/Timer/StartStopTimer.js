"use strict";
exports.__esModule = true;
exports.StartStopTimer = void 0;
var framer_motion_1 = require("framer-motion");
var use_immer_1 = require("use-immer");
function StartStopTimer(_a) {
    var start = _a.start, stop = _a.stop;
    var _b = (0, use_immer_1.useImmer)(true), toggle = _b[0], setToggle = _b[1];
    return (<button onClick={function () {
            setToggle(!toggle);
            toggle ? start() : stop();
        }} className=" bg-white p-3 px-6">
      <framer_motion_1.motion.div whileTap={{ scale: 1.5 }}>
        {toggle ? <PlayIcon /> : <PauseIcon />}
      </framer_motion_1.motion.div>
    </button>);
}
exports.StartStopTimer = StartStopTimer;
function PlayIcon() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-play-fill transition delay-300 duration-500 ease-in-out" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg>);
}
function PauseIcon() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
    </svg>);
}
