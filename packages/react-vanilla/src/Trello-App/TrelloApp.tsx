import { Draft } from "immer";
import { useAtomValue } from "jotai";
import { useImmerReducer } from "use-immer";
import { cardTitle } from "./GlobalState";
import { NavBar } from "./Navbar";
import { SideNavbar } from "./SideNavbar";
import { TodoCard } from "./TodoSpace";
import { InitialState } from "./types";

export function TrelloApp() {
  const initialAtom = useAtomValue(cardTitle);
  const [state, dispatch] = useImmerReducer(reducer, initialAtom);

  return (
    <div className="flex h-screen flex-col bg-slate-800">
      <div className="border-b-[1.5px] border-gray-600/25">
        <NavBar />
      </div>
      <div className="flex h-[92vh] grow bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1440x1920/15b477c9abd496ff4cd464f94edc15bf/photo-1685519825719-e3c7abb18b81.jpg')] bg-cover bg-center bg-no-repeat">
        <SideNavbar />
        <div className="scrollbar-hide w-[90%] overflow-x-scroll">
          <TodoCard state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export type Action = {
  type: "list-title";
  title: string;
  setInitialAtom: (draft: Draft<InitialState[]>) => void;
};

let nextId = 1;

function reducer(draft: Draft<InitialState[]>, action: Action) {
  switch (action.type) {
    case "list-title": {
      if (action.title) {
        draft.push({
          id: (nextId += 1),
          title: action.title,
          done: false,
        });
        action.setInitialAtom({ ...draft });
      }
    }
  }
}
