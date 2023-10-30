import { useQuery } from "@tanstack/react-query";
import { Draft } from "immer";
import { useImmerReducer } from "use-immer";
import { apiCall, fakeProducts } from "./fakerData";
import { Navbar } from "./navbar";
import { ShoppingItems } from "./shoppingItems";

export function ShoppingCartApp() {
  const data = useQuery({
    queryKey: ["shop-list"],
    queryFn: () => apiCall(),
    initialData: () => fakeProducts,
  });
  const [cartState, dispatch] = useImmerReducer<State, Action>(reducer, []);
  console.log("App Comp", cartState);

  return (
    <div>
      <Navbar />
      <div className="">
        <ShoppingItems items={data.data} dispatch={dispatch} />
        {/* <CartItems products={data.data} state={cartState} dispatch={dispatch} /> */}
      </div>
    </div>
  );
}

type CartItem = {
  id: number;
  quantity: number;
};

export type State = CartItem[];

export type Action = {
  type: "add_item";
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
  }
}
