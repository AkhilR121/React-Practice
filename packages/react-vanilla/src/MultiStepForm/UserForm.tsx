import { motion } from "framer-motion";
import { Draft } from "immer";
import { useAtomValue, useSetAtom } from "jotai";
import { useImmerReducer } from "use-immer";
import { Action, UserProps, userAtom } from "./GlobalState";

export function UserForm() {
  const userFormData = useAtomValue(userAtom);
  const setUserAtom = useSetAtom(userAtom);
  const [state, dispatch] = useImmerReducer(reducer, userFormData);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 text-xl font-semibold"
    >
      <h1 className="mb-4 text-center text-3xl font-bold underline">
        User Form Details
      </h1>
      <div className="flex items-center gap-5">
        <label>First Name:</label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={state.firstName}
          onChange={e => {
            dispatch({
              type: "firstName",
              firstName: e.target.value,
              setUserAtom,
            });
          }}
          type="text"
          required
        />
      </div>
      <div className="flex items-center gap-5">
        <label>Last Name:</label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={state.lastName}
          onChange={e => {
            dispatch({
              type: "lastName",
              lastName: e.target.value,
              setUserAtom,
            });
          }}
          type="text"
          required
        />
      </div>
      <div className="flex items-center gap-20">
        <label>Age:</label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={state.age}
          onChange={e => {
            dispatch({ type: "age", age: e.target.value, setUserAtom });
          }}
          type="number"
          min={1}
          required
        />
      </div>
    </motion.div>
  );
}

export function reducer(draft: Draft<UserProps>, action: Action) {
  switch (action.type) {
    case "firstName": {
      draft.firstName = action.firstName;
      action.setUserAtom({ ...draft });
      break;
    }
    case "lastName": {
      draft.lastName = action.lastName;
      action.setUserAtom({ ...draft });
      break;
    }
    case "age": {
      draft.age = action.age;
      action.setUserAtom({ ...draft });
      break;
    }
  }
}
