import { faker } from "@faker-js/faker";
import produce from "immer";
import _ from "remeda";

type User = Readonly<{
  id: number;
  name: string;
  email: string;
}>;

type Task = Readonly<{
  deadline: Date;
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}>;

let nextId = 1000;
function createUser(): User {
  return {
    id: nextId++,
    name: faker.name.fullName(),
    email: faker.internet.email(),
  };
}

function deadline() {
  return faker.datatype.boolean() ? faker.date.past() : faker.date.future();
}

let nextTaskId = 0;
function createTask(userId: number): Task {
  return {
    deadline: deadline(),
    id: nextTaskId++,
    userId,
    title: faker.lorem.sentence(),
    completed: faker.datatype.boolean(),
  };
}

function createUsers(n: number) {
  return _.pipe(_.range(0, n), _.map(createUser));
}

function createTasksFor(userId: number, maxCount: number) {
  const taskCount = faker.datatype.number({
    min: 2,
    max: maxCount,
  });

  return _.pipe(
    _.range(0, taskCount),
    _.map(() => createTask(userId))
  );
}

function createTasks(users: readonly User[], maxCount: number): Task[] {
  return _.pipe(
    users,
    _.map(u => createTasksFor(u.id, maxCount)),
    _.flatten()
  );
}

export const users: readonly User[] = createUsers(4);
export let tasks: readonly Task[] = createTasks(users, 10);

// const usernames = new Map(users.map(u => [u.id, u.name]));

export function setCompletedAboveDeadline(userId: number): void {
  tasks = produce(tasks, draft => {
    for (const task of draft) {
      if (task.userId === userId && task.deadline < new Date()) {
        task.completed = true;
      }
    }
  });
}
