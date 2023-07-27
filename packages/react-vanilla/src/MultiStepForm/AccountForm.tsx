import { motion } from "framer-motion";
import { Draft } from "immer";
import { useAtomValue, useSetAtom } from "jotai";
import { useImmerReducer } from "use-immer";
import { Action, UserAccount, accountAtom } from "./GlobalState";

export function AccountForm() {
  const userAccountAtom = useAtomValue(accountAtom);
  const setUserAtom = useSetAtom(accountAtom);
  const [state, dispatch] = useImmerReducer(reducer, userAccountAtom);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 text-xl font-semibold"
    >
      <h1 className="mb-4 text-center text-3xl font-bold underline">
        Account Details
      </h1>

      <div className="flex items-center gap-10">
        <label>Email: </label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={state.email}
          onChange={e => {
            dispatch({ type: "email", email: e.target.value, setUserAtom });
          }}
          type="email"
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={state.password}
          onChange={e => {
            dispatch({
              type: "password",
              password: e.target.value,
              setUserAtom,
            });
          }}
          type="password"
          required
        />
      </div>
    </motion.div>
  );
}

function reducer(draft: Draft<UserAccount>, action: Action) {
  switch (action.type) {
    case "email": {
      draft.email = action.email;
      action.setUserAtom({ ...draft });
      break;
    }
    case "password": {
      draft.password = action.password;
      action.setUserAtom({ ...draft });
    }
  }
}
