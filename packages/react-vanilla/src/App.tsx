// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route path="/counter" element={<Counter />}></Route>
//       <Route path="/TodoApp" element={<TodoApp />}></Route>
//       <Route path="/data-grid" element={<DataGridApp />}></Route>
//       <Route path="timer" element={<TimerApp />}></Route>
//       <Route path="query" element={<RQuery />}></Route>
//       <Route path="/shopping-cart" element={<ShoppingCartApp />}></Route>
//       <Route path="/multiStepForm" element={<MultiStepForm />} />
//       <Route path="/trello" element={<TrelloApp />} />
//     </Route>
//   )
// );
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ArcGisPractice } from "./ArcGis-Practice/ArcgisPractice";
import { ErrorPage } from "./ErrorComp/ErrorPage";
import { MultiStepForm } from "./MultiStepForm/MultiStepForm";
import { Root } from "./RootComp/Root";
import { TimerApp } from "./Timer/TimerApp";
import { TodoApp } from "./TodoApp/todo-app";
import { TrelloApp } from "./Trello-App/TrelloApp";
import { Counter } from "./counter/Counter";
import { DataGridApp } from "./data-grid/dataGridApp";
import { Login } from "./shopping-cart/Login";
import { Cart } from "./shopping-cart/cart";
import { ShoppingCartApp } from "./shopping-cart/shoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/trello",
    element: <TrelloApp />,
  },
  {
    path: "/DataGridApp",
    element: <DataGridApp />,
  },
  {
    path: "/TodoApp",
    element: <TodoApp />,
  },
  {
    path: "/TimerApp",
    element: <TimerApp />,
  },
  {
    path: "/MultiStepForm",
    element: <MultiStepForm />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCartApp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ArcGis",
    element: <ArcGisPractice />,
  },

  // Error Page
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
