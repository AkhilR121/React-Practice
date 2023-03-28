```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type Todo = {
  deadline: Date;
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

const users: User[] = getAllUsers();
const todos: Todo[] = getAllTodos(users);
```

1. Learn [fakers](https://fakerjs.dev/guide/). Use this library to implement the above functions `getUsers` and `getTodos` in a way that the data is generated randomly.

2. Write the following function

```typescript
type Result = {
  username: string;
  todos: { title: string; deadline: Date }[];
}[];

function getCompletedTodosFor(...userIds: number[]): Result;
```

Above function is similar to the following pseudo sql query

```sql
SELECT users.name, todos.title
FROM users
INNER JOIN todos ON users.id = todos.userId
WHERE todos.completed = true and users.id in ($x, $y, $z)
Order by users.name
```

In english, get all the todos for the given users, where the todos are completed and order the result by the user name.

3. Write the following function

```typescript
function setCompletedAboveDeadline(): void;
```

Above function is similar to the following pseudo sql query

```sql
UPDATE todos
SET completed = true
WHERE deadline < NOW()
```

In english, set all the todos to completed where the deadline is in the past.
