import { Route, Routes } from "react-router-dom";
import { MultiStepForm } from "./MultiStepForm/MultiStepForm";
import { RQuery } from "./React-query/react-query";
import { TimerApp } from "./Timer/TimerApp";
import { TodoApp } from "./TodoApp/todo-app";
import { Counter } from "./counter/Counter";
import { DataGridApp } from "./data-grid/dataGridApp";
import { JotaiPract } from "./jotai-practice";
import { Login } from "./shopping-cart/Login";
import { SignUp } from "./shopping-cart/SignUp";
import { ShoppingCartApp } from "./shopping-cart/shoppingCart";

export const App = () => {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />}></Route>
      <Route path="/TodoApp" element={<TodoApp />}></Route>
      <Route path="/data-grid" element={<DataGridApp />}></Route>
      <Route path="jotai" element={<JotaiPract />}></Route>
      <Route path="timer" element={<TimerApp />}></Route>
      <Route path="query" element={<RQuery />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCartApp />}></Route>
      <Route path="/login" element={<Login />}>
        <Route path="signup" element={<SignUp />}></Route>
      </Route>
      <Route path="/multiStepForm" element={<MultiStepForm />} />
    </Routes>
  );
};
