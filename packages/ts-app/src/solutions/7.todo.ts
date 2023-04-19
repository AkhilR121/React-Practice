import { faker } from "@faker-js/faker";

import {
  Positive,
  uint,
  checked,
  each,
  entries,
  filter,
  flatten,
  groupBy,
  map,
  notNil,
  orderBy,
  pick,
  pipe,
  range,
  take,
  toMap,
} from "@ti/core";
import { enableMapSet, produce } from "immer";

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

const createUsers = checked([uint], n =>
  pipe(
    range(n),
    map(i => [i, createUser(i)] as const),
    toMap
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

  return pipe(
    range(taskCount),
    map(taskId => createTask(taskId, userId))
  );
}

export const createTasks = (
  users: Iterable<User>,
  options: { maxTasksPerUser: number }
): Map<number, Task> =>
  pipe(
    users,
    map(u => createTasksFor(u.id, options)),
    flatten,
    map(t => [t.id, t] as const),
    toMap
  );

const users = createUsers(5);
let tasks = createTasks(users.values(), { maxTasksPerUser: 10 });

const username = checked([uint], id => notNil(users.get(id)).name);

export type CompletedTodoListResult = Iterable<{
  username: string;
  todoList: Array<{ title: string; deadline: Date }>;
}>;

export const getCompletedTodoListFor = (
  ...userIds: number[]
): CompletedTodoListResult =>
  pipe(
    tasks.values(),
    filter(t => userIds.includes(t.userId) && t.completed),
    groupBy(t => t.userId),
    entries,
    map(([userId, todoList]) => ({
      username: username(userId),
      todoList: todoList.map(pick(["title", "deadline"])),
    }))
  );

export const setCompletedAboveDeadline = checked([uint], (userId): void => {
  tasks = produce(tasks, draft => {
    pipe(
      draft.values(),
      filter(t => t.userId === userId && t.deadline < new Date()),
      each(t => {
        t.completed = true;
      })
    );
  });
});

export type MostIncompleteUsersResult = IterableIterator<
  Readonly<{ username: string; count: number }>
>;

export const getMostIncompleteUsers = checked(
  [Positive],
  (n): MostIncompleteUsersResult =>
    pipe(
      tasks.values(),
      filter(t => !t.completed),
      groupBy(t => t.userId),
      entries,
      map(([userId, todoList]) => ({
        username: username(userId),
        count: todoList.length,
      })),
      orderBy("count", "desc"),
      take(n)
    )
);
