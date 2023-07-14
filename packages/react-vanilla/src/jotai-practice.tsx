import { atom, useAtom } from "jotai";
import { Suspense } from "react";

const userIdAtom = atom(1);
const userAtom = atom(async (get, { signal }) => {
  const userId = get(userIdAtom);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`,
    { signal }
  );
  return response.json();
});

const Controls = () => {
  const [userId, setUserId] = useAtom(userIdAtom);
  return (
    <div className="items center flex justify-center text-2xl font-semibold">
      User Id: {userId}
      <button
        className="mx-5 rounded-md bg-gray-300 p-3"
        onClick={() => {
          setUserId(c => c - 1);
        }}
      >
        Prev
      </button>
      <button
        className="rounded-md bg-gray-300 p-3 "
        onClick={() => {
          setUserId(c => c + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

const UserName = () => {
  const [user] = useAtom(userAtom);
  return (
    <div className="flex justify-center text-2xl font-semibold">
      User name: {user.name}
    </div>
  );
};

export const JotaiPract = () => (
  <>
    <Controls />
    <Suspense fallback="Loading...">
      <UserName />
    </Suspense>
  </>
);
