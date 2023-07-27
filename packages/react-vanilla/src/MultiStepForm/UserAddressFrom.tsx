import { motion } from "framer-motion";
import { Draft } from "immer";
import { useAtomValue, useSetAtom } from "jotai";
import { useImmerReducer } from "use-immer";
import { Action, UserLocation, addressAtom } from "./GlobalState";

export function UserAddress() {
  const userAddressAtom = useAtomValue(addressAtom);
  const setUserAtom = useSetAtom(addressAtom);
  const [address, dispatch] = useImmerReducer(reducer, userAddressAtom);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 text-xl font-semibold"
    >
      <h1 className="mb-3 text-center text-3xl font-bold underline">
        Personal Details
      </h1>
      <div className="flex items-center gap-5">
        <label>Street: </label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={address.street}
          onChange={e => {
            dispatch({ type: "street", street: e.target.value, setUserAtom });
          }}
          type="text"
          required
        />
      </div>
      <div className="flex items-center gap-9">
        <label>City: </label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={address.city}
          onChange={e => {
            dispatch({ type: "city", city: e.target.value, setUserAtom });
          }}
          type="text"
          required
        />
      </div>
      <div className="flex items-center gap-7">
        <label>State: </label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={address.state}
          onChange={e => {
            dispatch({ type: "state", state: e.target.value, setUserAtom });
          }}
          type="text"
          required
        />
      </div>
      <div className="flex items-center gap-11">
        <label>Zip: </label>
        <input
          className="w-[25rem] border-b-2 border-black bg-gray-200 p-3 outline-none"
          value={address.zip}
          onChange={e => {
            dispatch({ type: "zip", zip: e.target.value, setUserAtom });
          }}
          type="number"
          required
        />
      </div>
    </motion.div>
  );
}

function reducer(draft: Draft<UserLocation>, action: Action) {
  switch (action.type) {
    case "street": {
      draft.street = action.street;
      action.setUserAtom({ ...draft });
      break;
    }
    case "city": {
      draft.city = action.city;
      action.setUserAtom({ ...draft });

      break;
    }
    case "state": {
      draft.state = action.state;
      action.setUserAtom({ ...draft });

      break;
    }
    case "zip": {
      draft.zip = action.zip;
      action.setUserAtom({ ...draft });
      break;
    }
  }
}
