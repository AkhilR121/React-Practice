import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MultiStepForm } from "./MultiStepForm/MultiStepForm";
import { RQuery } from "./React-query/react-query";
import { TimerApp } from "./Timer/TimerApp";
import { TodoApp } from "./TodoApp/todo-app";
import { TrelloApp } from "./Trello-App/TrelloApp";
import { Counter } from "./counter/Counter";
import { DataGridApp } from "./data-grid/dataGridApp";

import { ShoppingCartApp } from "./shopping-cart/shoppingCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/counter" element={<Counter />}></Route>
      <Route path="/TodoApp" element={<TodoApp />}></Route>
      <Route path="/data-grid" element={<DataGridApp />}></Route>
      <Route path="timer" element={<TimerApp />}></Route>
      <Route path="query" element={<RQuery />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCartApp />}></Route>
      <Route path="/multiStepForm" element={<MultiStepForm />} />
      <Route path="/trello" element={<TrelloApp />} />
    </Route>
  )
);
export const App = () => {
  return <RouterProvider router={router} />;
};
