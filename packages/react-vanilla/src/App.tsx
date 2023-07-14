import { Route, Routes } from "react-router-dom";
import { TimerApp } from "./Timer/TimerApp";
import { TodoApp } from "./TodoApp/todo-app";
import { Counter } from "./counter/Counter";
import { JotaiPract } from "./counter/jotai-practice";
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
        <Route path="jotai" element={<JotaiPract />}></Route>
        <Route path="timer" element={<TimerApp />}></Route>
      </Routes>
    </>
  );
};
