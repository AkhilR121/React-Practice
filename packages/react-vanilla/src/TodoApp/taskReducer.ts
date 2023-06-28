type State = { id: number; text: string; done: boolean };
type Action =
  | { type: "add-task"; text: string }
  | { type: "delete-task"; id: number }
  | { type: "edit-task"; text: State };
let nextId = 3;
export const taskReducer = (draft: State[], action: Action) => {
  switch (action.type) {
    case "add-task": {
      if (action.text) {
        draft.push({
          id: (nextId += 1),
          text: action.text,
          done: false,
        });
      }
      break;
    }
    case "edit-task": {
      const index = draft.findIndex(t => t.id === action.text.id);
      draft[index] = action.text;
      break;
    }
    case "delete-task": {
      const index = draft.findIndex(t => t.id === action.id);
      draft.splice(index, 1);
      break;
    }
    default:
      break;
  }
};
