import { Route, Routes } from "react-router-dom";
import { TodoApp } from "./TodoApp/todo-app";
import { Counter } from "./counter/Counter";
import { NumberShuffle } from "./number-shuffle/number-shuffle";
import { ShoppingCartApp } from "./shopping-cart/shoppingCart";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/TodoApp" element={<TodoApp />}></Route>
        <Route path="/number-shuffle" element={<NumberShuffle />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCartApp />}></Route>
      </Routes>
    </>
  );
};
