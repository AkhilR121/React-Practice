1. What does current function do in immer? Is it okay to use this function in production? Explain.
   Solution: The current function will produces us the mutated value/data of a draft(Array/object). It produces the snapshot of current state of the draft.
   Example:
   const obj = {
   x: 0
   }
   const result = produce(obj, draft => {
   draft.x = 1 //Output: x: 1
   const curr = current(draft)
   console.log(curr.x); //Output x: 1
   })
   It is okay to use this current function in production because objects created by current is same as the produce. Also, used for debugging.

2. What does original function do in immer? How is it different from current? Can this be used in production? Explain.
   Solution:
   A) Original function is will produces the value of original object but not from draft object i.e value before mutation by the draft.
   Example:-
   const obj = {
   x: 0
   }
   const result = produce(obj, draft => {
   draft.x = 1 //Output: x: 1
   const original = original(draft)
   console.log(original.x); //Output x: 0
   })
3. import { produce } from 'immer'

const todosArray = [
{ id: 'id1', done: false, body: 'Take out the trash' },
{ id: 'id2', done: false, body: 'Check Email' },
]

// add
const addedTodosArray = produce(todosArray, draft => {
draft.push({ id: 'id3', done: false, body: 'Buy bananas' })
})

Explain if the above code perform better than the following code, assuming todosArray is very large?

const addedTodosArray = [
...todosArray,
{ id: 'id3', done: false, body: 'Buy bananas' },
]
Solution:
A). The above code will perform better than the following code because addedTodoArray is not immutable. There occurring a "mutation" because there creating a new array and spreading todoArray into addedTodosArray.
B). todosArray will perform well because there we creating a draft/duplicate copy of original array by using the immer by that we can manipulate array also there is not effect in original array if mutation occurs.

4. Write a counter using useImmerReducer hook.

```ts
import { useImmerReducer } from "use-immer";

export function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, { count: 0 });
  function handleInc() {
    dispatch({ type: "inc_count" });
  }
  function handleDec() {
    dispatch({ type: "dec_count" });
  }

  return (
    <div className="container m-auto mt-[200px] flex flex-col gap-4 text-2xl">
      <div className="flex items-center justify-center">
        <button
          onClick={handleInc}
          className="rounded-lg border-2 border-black p-3 px-5 font-bold"
        >
          +
        </button>
        <div className="m-8 w-40 rounded-lg bg-red-500 p-5 text-center text-3xl font-bold text-white shadow-2xl shadow-red-500">
          {state.count}
        </div>
        <button
          onClick={handleDec}
          className="rounded-lg border-2 border-black p-3 px-5 font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
}

type Action = { type: "inc_count" } | { type: "dec_count" } | { type: "reset" };

function reducer(draft: { count: number }, action: Action): any {
  switch (action.type) {
    case "inc_count": {
      return {
        count: draft.count + 1,
      };
    }
    case "dec_count": {
      return {
        count: draft.count - 1,
      };
    }
  }
}
```

5. const obj = {
   foo: { bar: 100 },
   baz: { qux: 200 },
   }

const result = produce(obj, draft => {
draft.baz.qux = 400
})

console.log(obj.foo.bar)
console.log(obj.baz.qux)

console.log(result.foo.bar)
console.log(result.baz.qux)

console.log(obj.foo === result.foo)
console.log(obj.baz === result.baz)

What will be the result of the above code? Explain.

Solution:
100
200
100
400
true
false

Explanation:-
A) There is a difference between "obj.baz.qux" value and "result.baz.qux" because obj.bass.quz value get console directed from original object where as the result.baz.qux value is the mutated value by using immer.
B) Here the original object is not get disturbed by the mutation because here we create a draft/duplicate "obj" and we mutated that draft object. This is main advantage of using immer
C) By using immer we can mutate any object or array without disturbing the original obj/array.

6. What are branded types? Create a branded type for email.

7. When should you use safeParse vs parse (zod spec)?
   Solution: In zod safeparse() method will parse the values without throwing an error instead it will returns the zod-type which having the success property with boolean type. If "success: false" parsing failed else if "success: true" parsing data is done successfully.
   Where parse() method will throw an error.
   Example:-
   const Schema = z.string();
   Schema.parse("ReactJS") //parse the data successfully.
   Schema.parse(9) //Throw an error the 12 is not a string.

8. Create a zod type for Signup form with emailid, password and confirmPassword fields. Make sure you check that password and confirmPassword are equal.
   Solution:

   ```ts
   const emailSchema = z.object({
     email: z.string(),
   });
   const passwordSchema = z
     .object({
       password: z.string(),
       confirmPassword: z.string(),
     })
     .refine(pass => pass.password === pass.confirmPassword, {
       message: "Password and confirmPassword is not matching",
       path: ["confirm"],
     });
   ```

9. Why do we need refine method when it doesn't change typescript type? Explain with an example.
   Solution: refine method does not get triggered until all the fields in the object is passed in. It will also check the given condition is satisfied or not. For example password and confirmPassword.

10. Create a zod type to represent the following type:

```ts
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_COUNT"; payload: number }
  | { type: "RESET" };
```

Solution:

```ts
import { z } from "zod";
const inc = z.object({ type: z.literal("INCREMENT") });
const dec = z.object({ type: z.literal("DECREMENT") });

const setCount = z.object({
  type: z.literal("SET_COUNT"),
  payload: z.number().gt(0).positive(),
});
const reset = z.object({ type: z.literal("RESET") });

const Action = z.union([inc, dec, setCount, reset]);
```
