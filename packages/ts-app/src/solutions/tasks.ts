import { faker } from "@faker-js/faker";
import { checked, notNil, uint } from "@ti/core";
import * as _ from "remeda";

type Task = Readonly<{
  id: number;
  title: string;
  completed: boolean;
}>;

let nextTaskId = 0;
const createTask = (): Task => ({
  id: nextTaskId++,
  title: faker.lorem.sentence(),
  completed: faker.datatype.boolean(),
});

const createTasks = checked([uint], n =>
  _.pipe(_.range(0, n), _.map(createTask))
);

const tasks: readonly Task[] = createTasks(10);

const elementById = (id: string) => notNil(document.getElementById(id));

function element<K extends keyof HTMLElementTagNameMap>(args: {
  tagName: K;
  className?: string;
  text: string;
}): HTMLElementTagNameMap[K] {
  const el = document.createElement(args.tagName);
  if (args.className) {
    el.classList.add(args.className);
  }
  el.textContent = args.text;

  return el;
}

const taskInput = elementById("taskInput") as HTMLInputElement;
const addTaskButton = elementById("addTaskButton") as HTMLButtonElement;
const taskList = elementById("taskList") as HTMLUListElement;

addTaskButton.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task) {
    createTaskItem(task);
    taskInput.value = "";
  }
});

function createTaskItem(title: Task["title"]) {
  const listItem = element({ tagName: "li", text: title });

  const deleteButton = element({
    tagName: "button",
    className: "delete-button",
    text: "Delete",
  });

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("complete");
  });

  deleteButton.addEventListener("click", event => {
    event.stopPropagation();
    taskList.removeChild(listItem);
  });
}

window.onload = () => {
  for (const task of tasks) {
    createTaskItem(task.title);
  }
};
