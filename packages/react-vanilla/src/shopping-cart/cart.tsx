import { Draft } from "immer";
import { useImmerReducer } from "use-immer";
import { CartItems } from "./cart-items";

export function Cart() {
  const [cartState, dispatch] = useImmerReducer<State, Action>(reducer, []);

  return <CartItems products={[]} state={cartState} dispatch={dispatch} />;
}

type CartItem = {
  id: number;
  quantity: number;
};

export type State = CartItem[];

export type Action =
  | {
      type: "inc_item";
      id: number;
    }
  | {
      type: "dec_item";
      id: number;
    };

function reducer(draft: Draft<State>, action: Action) {
  switch (action.type) {
    case "inc_item": {
      const item = draft.find(d => d.id === action.id);
      if (item) {
        item.quantity++;
      }
      break;
    }
    case "dec_item": {
      const item = draft.find(d => d.id === action.id);
      if (item) {
        if (item.quantity === 1) {
          const index = draft.findIndex(ci => ci.id === action.id);
          draft.splice(index, index + 1);
          break;
        }
        item.quantity--;
      }
      break;
    }
  }
}
