import { Route, Routes } from "react-router-dom";
import { TodoApp } from "./TodoApp/todo-app";
import { Counter } from "./counter/Counter";
import { DataGridApp } from "./data-grid/dataGridApp";
import { ShoppingCartApp } from "./shopping-cart/shoppingCart";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/TodoApp" element={<TodoApp />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCartApp />}></Route>
        <Route path="/data-grid" element={<DataGridApp />}></Route>
      </Routes>
    </>
  );
};
