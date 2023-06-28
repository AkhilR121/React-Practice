import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { InitialState } from "./todo-app";

type TodoProps = {
  tasks: InitialState[];
  onChangeTask: (task: { id: number; text: string; done: boolean }) => void;
  onDeleteTask: (taskId: number) => void;
};

export const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: custom },
  }),
};

export const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TodoProps): JSX.Element {
  return (
    <ul>
      <AnimatePresence>
        {tasks.map((task: InitialState, index: number) => (
          <motion.li
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            layoutId={String(task.id)}
            custom={(index + 1) * 0.5}
            whileHover={{ scale: 1.05 }}
            key={task.id}
            className="my-4 rounded-lg bg-green-400 px-2"
          >
            <Task
              task={task}
              onChangeInp={onChangeTask}
              onDelete={onDeleteTask}
            />
          </motion.li>
        ))}
      </AnimatePresence>
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
          <AnimatePresence>
            <motion.input
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="w-[100%] rounded-md p-2 px-3 shadow-lg outline-none"
              value={task.text}
              onChange={e => {
                onChangeInp({
                  ...task,
                  text: e.target.value,
                });
              }}
            />
          </AnimatePresence>
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
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className={`w-[100%] font-mono text-xl ${
            task.done ? "line-through opacity-30" : "none"
          }`}
        >
          {task.text}
        </motion.p>
        <button
          className="font-semibold"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="blue"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <motion.path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              variants={svgVariants}
              initial="start"
              animate="finished"
            />
          </svg>
        </button>
      </>
    );
  }
  return (
    <div className="my-3 flex w-[100%] items-center gap-3 p-1">
      <input
        className="h-5 w-5 bg-gray-900 accent-green-700"
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
