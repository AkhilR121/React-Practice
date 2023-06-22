import { Draft } from "immer";
import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { CartItems } from "./cart-items";
import { fakeProducts } from "./fakerData";
import { Navbar } from "./navbar";
import { ShoppingItems } from "./shoppingItems";

export function ShoppingCartApp() {
  const [products] = useState(() => fakeProducts);
  const [cartState, dispatch] = useImmerReducer<State, Action>(reducer, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <ShoppingItems items={products} dispatch={dispatch} />
          <CartItems
            products={products}
            state={cartState}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
}

type CartItem = {
  id: number;
  quantity: number;
};

export type State = CartItem[];

export type Action =
  | {
      type: "add_item";
      id: number;
    }
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
    case "add_item": {
      if (!draft.find(ele => ele.id === action.id)) {
        draft.push({ id: action.id, quantity: 1 });
      }
      break;
    }
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
