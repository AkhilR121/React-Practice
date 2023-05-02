import { faker } from "@faker-js/faker";

import { int, uint, checked, entries, notNil } from "@ti/core";
import { enableMapSet, produce } from "immer";
import * as _ from "remeda";

enableMapSet();

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

const createUser = checked([uint], id => ({
  id,
  name: faker.name.fullName(),
  email: faker.internet.email(),
}));

const createUsers = checked(
  [uint],
  n =>
    new Map(
      _.pipe(
        _.range(0, n),
        _.map(i => [i, createUser(i)] as const)
      )
    )
);

const deadline = () =>
  faker.datatype.boolean() ? faker.date.past() : faker.date.future();

const createTask = checked([uint, uint], (taskId, userId) => ({
  id: taskId,
  deadline: deadline(),
  title: faker.lorem.sentence(),
  completed: faker.datatype.boolean(),
  userId,
}));

function createTasksFor(userId: number, options: { maxTasksPerUser: number }) {
  const taskCount = faker.datatype.number({
    min: 2,
    max: options.maxTasksPerUser,
  });

  return _.pipe(
    _.range(0, taskCount),
    _.map(taskId => createTask(taskId, userId))
  );
}

export const createTasks = (
  users: readonly User[],
  options: { maxTasksPerUser: number }
): Map<number, Task> =>
  new Map(
    _.pipe(
      users,
      _.map(u => createTasksFor(u.id, options)),
      _.flatten(),
      _.map(t => [t.id, t] as const)
    )
  );

const users = createUsers(5);
let tasks = createTasks(Array.from(users.values()), { maxTasksPerUser: 10 });

const username = checked(
  [uint],
  (id: number) => notNil(users.get(id)).name
);

export type CompletedTodoListResult = Iterable<{
  username: string;
  todoList: Array<{ title: string; deadline: Date }>;
}>;

export const getCompletedTodoListFor = (
  ...userIds: number[]
): CompletedTodoListResult =>
  _.pipe(
    Array.from(tasks.values()),
    _.filter(t => userIds.includes(t.userId) && t.completed),
    _.groupBy(t => t.userId),
    entries,
    _.map(([userId, todoList]) => ({
      username: username(int.parse(userId)),
      todoList: todoList.map(todo => _.pick(todo, ["title", "deadline"])),
    }))
  );

export const setCompletedAboveDeadline = checked(
  [uint],
  (userId): void => {
    tasks = produce(tasks, draft => {
      for (const task of draft.values()) {
        if (task.userId === userId && task.deadline < new Date()) {
          task.completed = true;
        }
      }
    });
  }
);

export type MostIncompleteUsersResult = Array<{
  username: string;
  count: number;
}>;

export const getMostIncompleteUsers = checked(
  [uint],
  (n): MostIncompleteUsersResult =>
    _.pipe(
      Array.from(tasks.values()),
      _.filter(t => !t.completed),
      _.groupBy(t => t.userId),
      entries,
      _.map(([userId, todoList]) => ({
        username: username(int.parse(userId)),
        count: todoList.length,
      })),
      _.sort((a, b) => b.count - a.count),
      _.take(n)
    )
);
