import { faker } from "@faker-js/faker";
import { flatten, map, pipe, range, toArray } from "@lib";

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
  return pipe(range(n), map(createUser), toArray);
}

function createTasksFor(userId: number, maxCount: number) {
  const taskCount = faker.datatype.number({
    min: 2,
    max: maxCount,
  });

  return pipe(
    range(taskCount),
    map(() => createTask(userId)),
    toArray
  );
}

function createTasks(users: readonly User[], maxCount: number) {
  return pipe(
    users,
    map(u => createTasksFor(u.id, maxCount)),
    flatten,
    toArray
  );
}

export const users: readonly User[] = createUsers(4);
export const tasks: readonly Task[] = createTasks(users, 10);
