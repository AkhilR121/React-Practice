import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { AddTask } from "./addTask";
import { RadioBtns } from "./radioBtns";
import { taskReducer } from "./taskReducer";
import { TaskList, svgVariants } from "./todoList";

export type InitialState = {
  id: number;
  text: string;
  done: boolean;
};

export function TodoApp() {
  const initialState: InitialState[] = [
    { id: 1, text: "add-1", done: false },
    { id: 2, text: "add-2", done: false },
    { id: 3, text: "add-3", done: false },
  ];

  const [state, dispatch] = useImmerReducer(taskReducer, initialState);
  const [radioBtn, setRadioBtn] = useState("all");

  function handleRadioBtns(inp: string) {
    setRadioBtn(inp);
  }

  let list = state;
  if (radioBtn === "complete") {
    list = list.filter(task => task.done);
  }
  if (radioBtn === "incomplete") {
    list = list.filter(task => task.done === false);
  }

  function handleClickAdd(text: string) {
    dispatch({ type: "add-task", text: text });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "delete-task",
      id: taskId,
    });
  }
  function handleEditTask(task: { id: number; text: string; done: boolean }) {
    dispatch({
      type: "edit-task",
      text: task,
    });
  }

  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-green-200">
      <div className="m-auto flex max-w-xl flex-col">
        <AnimatePresence>
          <motion.h1 className="m-5 flex items-center justify-center gap-4 font-serif text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="green"
              className="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <motion.path
                d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                variants={svgVariants}
                initial="start"
                animate="finished"
              />
            </svg>
            <h1 className="font-['Fira_Sans'] font-bold">ToDo Application</h1>
          </motion.h1>
        </AnimatePresence>
        <RadioBtns radioBtn={radioBtn} handleRadioBtns={handleRadioBtns} />
        <AddTask handleClickAdd={handleClickAdd} />
        <TaskList
          tasks={list}
          onChangeTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
