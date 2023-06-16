import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { AddTask } from "./addTask";
import { RadioBtns } from "./radioBtns";
import { taskReducer } from "./taskReducer";
import { TaskList } from "./todoList";

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
    <div className="h-screen bg-green-300/50">
      <div className="m-auto flex max-w-xl flex-col">
        <h1 className="m-5 flex justify-center font-serif text-4xl">
          ToDo Application
        </h1>
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
