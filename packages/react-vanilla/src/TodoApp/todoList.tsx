import { useState } from "react";
import { InitialState } from "./todo-app";

type TodoProps = {
  tasks: InitialState[];
  onChangeTask: (task: { id: number; text: string; done: boolean }) => void;
  onDeleteTask: (taskId: number) => void;
};

export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TodoProps): JSX.Element {
  return (
    <ul>
      {tasks.map((task: InitialState) => (
        <li key={task.id}>
          <Task
            task={task}
            onChangeInp={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

type TaskListProps = {
  task: InitialState;
  onChangeInp: (task: { id: number; text: string; done: boolean }) => void;
  onDelete: (taskId: number) => void;
};

function Task({ task, onChangeInp, onDelete }: TaskListProps) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <div className="flex w-[100%] justify-between gap-5 ">
          <input
            className="w-[100%] rounded-md border-b-2 border-black p-2 px-3 shadow-lg outline-none"
            value={task.text}
            onChange={e => {
              onChangeInp({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button
            onClick={() => {
              setIsEditing(false);
            }}
          >
            <i className="bi bi-upload text-xl text-green-800"></i>
          </button>
        </div>
      </>
    );
  } else {
    taskContent = (
      <>
        <p
          className={`w-[100%] font-mono text-xl ${
            task.done ? "line-through opacity-30" : "none"
          }`}
        >
          {task.text}
        </p>
        <button
          className="font-semibold"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <i className="bi bi-pencil-square text-xl text-blue-600"></i>
        </button>
      </>
    );
  }
  return (
    <div className="my-3 flex w-[100%] items-center gap-3 p-1">
      <input
        className="h-5 w-5"
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChangeInp({ ...task, done: e.target.checked });
        }}
      />
      {taskContent}
      <button
        className="p-1 font-semibold"
        onClick={() => {
          onDelete(task.id);
        }}
      >
        <i className="bi bi-trash text-xl text-red-600"></i>
      </button>
    </div>
  );
}
