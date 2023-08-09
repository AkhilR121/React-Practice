import { Draft } from "immer";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { useImmer } from "use-immer";
import { InitialState, cardTitle } from "./GlobalState";
import { Action } from "./TrelloApp";
import { AddIcon, CancelIcon, OptionIcon } from "./TrelloIcons";

export function TodoCard({
  state,
  dispatch,
}: {
  state: InitialState[];
  dispatch: React.Dispatch<Action>;
}) {
  const setInitialAtom = useSetAtom(cardTitle);

  return (
    <div className="flex">
      {/* <div className="navbar">Navbar</div> */}
      <div className="flex">
        {state.map(card => {
          return (
            <div
              className="m-3 flex w-64 flex-col rounded-2xl bg-[#101204] p-2 font-semibold text-[#85919D]"
              key={card.title}
              draggable
            >
              <header className="flex justify-between px-1">
                <h1 className="">{card.title}</h1>
                <button className="rounded-md p-2 hover:bg-gray-700">
                  <OptionIcon />
                </button>
              </header>

              <main className="m-1 my-2 flex rounded-md bg-gray-700 p-2 text-sm">
                First Todo
              </main>

              <footer>
                <div className="flex justify-between px-2">
                  <button className="flex items-center gap-2 p-1">
                    <AddIcon />
                    <h4>Add a card</h4>
                  </button>
                </div>
              </footer>
            </div>
          );
        })}
      </div>
      <div className="p-5">
        <AddCard setInitialAtom={setInitialAtom} dispatch={dispatch} />
      </div>
    </div>
  );
}

export function AddCard({
  setInitialAtom,
  dispatch,
}: {
  setInitialAtom: (draft: Draft<InitialState[]>) => void;
  dispatch: React.Dispatch<Action>;
}): JSX.Element {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      {isEditing ? (
        <div
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className="flex w-64 cursor-pointer flex-row items-center rounded-xl bg-white bg-opacity-40 p-2 text-white hover:bg-opacity-25"
        >
          <span className="text-2xl">+</span>
          <p>Add another list</p>
        </div>
      ) : (
        <AddTitleCard
          dispatch={dispatch}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          setInitialAtom={setInitialAtom}
        />
      )}
    </div>
  );
}

export function AddTitleCard({
  dispatch,
  setIsEditing,
  isEditing,
  setInitialAtom,
}: {
  setInitialAtom: (draft: Draft<InitialState[]>) => void;

  dispatch: React.Dispatch<Action>;
  setIsEditing: (isEditing: boolean) => void;
  isEditing: boolean;
}) {
  const [title, setTitle] = useImmer("");

  return (
    <div className="w-64 rounded-xl bg-black bg-opacity-40 p-3 hover:bg-opacity-25">
      <input
        type="text"
        placeholder="Enter list title..."
        name="title"
        value={title}
        className="w-full rounded-md border-2 border-[#85B8FF] p-1 outline-none"
        onChange={e => {
          setTitle(e.target.value);
        }}
      />

      <div className="flex items-center">
        <button
          onClick={() => {
            dispatch({
              type: "list-title",
              title: title,
              setInitialAtom,
            });
            setTitle("");
          }}
          className="mt-3 rounded-md bg-[#85B8FF] p-2 px-3 text-black"
        >
          Add list
        </button>

        <button
          className="pl-4 pt-3 text-[#85919D]"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <CancelIcon />
        </button>
      </div>
    </div>
  );
}
