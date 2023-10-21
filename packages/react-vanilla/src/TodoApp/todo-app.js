"use strict";
exports.__esModule = true;
exports.TodoApp = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var use_immer_1 = require("use-immer");
var addTask_1 = require("./addTask");
var radioBtns_1 = require("./radioBtns");
var taskReducer_1 = require("./taskReducer");
var todoList_1 = require("./todoList");
function TodoApp() {
    var initialState = [
        { id: 1, text: "add-1", done: false },
        { id: 2, text: "add-2", done: false },
        { id: 3, text: "add-3", done: false },
    ];
    var _a = (0, use_immer_1.useImmerReducer)(taskReducer_1.taskReducer, initialState), state = _a[0], dispatch = _a[1];
    var _b = (0, react_1.useState)("all"), radioBtn = _b[0], setRadioBtn = _b[1];
    function handleRadioBtns(inp) {
        setRadioBtn(inp);
    }
    var list = state;
    if (radioBtn === "complete") {
        list = list.filter(function (task) { return task.done; });
    }
    if (radioBtn === "incomplete") {
        list = list.filter(function (task) { return task.done === false; });
    }
    function handleClickAdd(text) {
        dispatch({ type: "add-task", text: text });
    }
    function handleDeleteTask(taskId) {
        dispatch({
            type: "delete-task",
            id: taskId
        });
    }
    function handleEditTask(task) {
        dispatch({
            type: "edit-task",
            text: task
        });
    }
    return (<div className="scrollbar-hide h-screen overflow-y-scroll bg-green-200">
      <div className="m-auto flex max-w-xl flex-col">
        <framer_motion_1.AnimatePresence>
          <framer_motion_1.motion.h1 className="m-5 flex items-center justify-center gap-4 font-serif text-4xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" className="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
              <framer_motion_1.motion.path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" variants={todoList_1.svgVariants} initial="start" animate="finished"/>
            </svg>
            <h1 className="font-['Fira_Sans'] font-bold">ToDo Application</h1>
          </framer_motion_1.motion.h1>
        </framer_motion_1.AnimatePresence>
        <radioBtns_1.RadioBtns radioBtn={radioBtn} handleRadioBtns={handleRadioBtns}/>
        <addTask_1.AddTask handleClickAdd={handleClickAdd}/>
        <todoList_1.TaskList tasks={list} onChangeTask={handleEditTask} onDeleteTask={handleDeleteTask}/>
      </div>
    </div>);
}
exports.TodoApp = TodoApp;
