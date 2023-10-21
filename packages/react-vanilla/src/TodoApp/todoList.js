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
exports.TaskList = exports.svgVariants = exports.itemVariants = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
exports.itemVariants = {
    hidden: { opacity: 0 },
    visible: function (custom) { return ({
        opacity: 1,
        transition: { duration: custom }
    }); }
};
exports.svgVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    finished: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};
function TaskList(_a) {
    var tasks = _a.tasks, onChangeTask = _a.onChangeTask, onDeleteTask = _a.onDeleteTask;
    return (<ul>
      <framer_motion_1.AnimatePresence>
        {tasks.map(function (task, index) { return (<framer_motion_1.motion.li variants={exports.itemVariants} initial="hidden" animate="visible" exit="hidden" layoutId={String(task.id)} custom={(index + 1) * 0.5} whileHover={{ scale: 1.05 }} key={task.id} className="my-4 rounded-lg bg-green-400 px-2">
            <Task task={task} onChangeInp={onChangeTask} onDelete={onDeleteTask}/>
          </framer_motion_1.motion.li>); })}
      </framer_motion_1.AnimatePresence>
    </ul>);
}
exports.TaskList = TaskList;
function Task(_a) {
    var task = _a.task, onChangeInp = _a.onChangeInp, onDelete = _a.onDelete;
    var _b = (0, react_1.useState)(false), isEditing = _b[0], setIsEditing = _b[1];
    var taskContent;
    if (isEditing) {
        taskContent = (<>
        <div className="flex w-[100%] justify-between gap-5 ">
          <framer_motion_1.AnimatePresence>
            <framer_motion_1.motion.input variants={exports.itemVariants} initial="hidden" animate="visible" className="w-[100%] rounded-md p-2 px-3 shadow-lg outline-none" value={task.text} onChange={function (e) {
                onChangeInp(__assign(__assign({}, task), { text: e.target.value }));
            }}/>
          </framer_motion_1.AnimatePresence>
          <button onClick={function () {
                setIsEditing(false);
            }}>
            <i className="bi bi-upload text-xl text-green-800"></i>
          </button>
        </div>
      </>);
    }
    else {
        taskContent = (<>
        <framer_motion_1.motion.p variants={exports.itemVariants} initial="hidden" animate="visible" className={"w-[100%] font-mono text-xl ".concat(task.done ? "line-through opacity-30" : "none")}>
          {task.text}
        </framer_motion_1.motion.p>
        <button className="font-semibold" onClick={function () {
                setIsEditing(true);
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <framer_motion_1.motion.path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" variants={exports.svgVariants} initial="start" animate="finished"/>
          </svg>
        </button>
      </>);
    }
    return (<div className="my-3 flex w-[100%] items-center gap-3 p-1">
      <input className="h-5 w-5 bg-gray-900 accent-green-700" type="checkbox" checked={task.done} onChange={function (e) {
            onChangeInp(__assign(__assign({}, task), { done: e.target.checked }));
        }}/>
      {taskContent}
      <button className="p-1 font-semibold" onClick={function () {
            onDelete(task.id);
        }}>
        <i className="bi bi-trash text-xl text-red-600"></i>
      </button>
    </div>);
}
