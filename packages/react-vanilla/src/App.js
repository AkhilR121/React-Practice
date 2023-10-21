"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
var MultiStepForm_1 = require("./MultiStepForm/MultiStepForm");
var react_query_1 = require("./React-query/react-query");
var TimerApp_1 = require("./Timer/TimerApp");
var todo_app_1 = require("./TodoApp/todo-app");
var TrelloApp_1 = require("./Trello-App/TrelloApp");
var Counter_1 = require("./counter/Counter");
var dataGridApp_1 = require("./data-grid/dataGridApp");
var Login_1 = require("./shopping-cart/Login");
var SignUp_1 = require("./shopping-cart/SignUp");
var shoppingCart_1 = require("./shopping-cart/shoppingCart");
var router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(<react_router_dom_1.Route path="/">
      <react_router_dom_1.Route path="/counter" element={<Counter_1.Counter />}></react_router_dom_1.Route>
      <react_router_dom_1.Route path="/TodoApp" element={<todo_app_1.TodoApp />}></react_router_dom_1.Route>
      <react_router_dom_1.Route path="/data-grid" element={<dataGridApp_1.DataGridApp />}></react_router_dom_1.Route>
      <react_router_dom_1.Route path="timer" element={<TimerApp_1.TimerApp />}></react_router_dom_1.Route>
      <react_router_dom_1.Route path="query" element={<react_query_1.RQuery />}></react_router_dom_1.Route>

      <react_router_dom_1.Route path="/shopping-cart" element={<shoppingCart_1.ShoppingCartApp />}></react_router_dom_1.Route>
      <react_router_dom_1.Route path="/login" element={<Login_1.Login />}>
        <react_router_dom_1.Route path="signup" element={<SignUp_1.SignUp />}></react_router_dom_1.Route>
      </react_router_dom_1.Route>
      <react_router_dom_1.Route path="/multiStepForm" element={<MultiStepForm_1.MultiStepForm />}/>
      <react_router_dom_1.Route path="/trello" element={<TrelloApp_1.TrelloApp />}/>
    </react_router_dom_1.Route>));
var App = function () {
    return <react_router_dom_1.RouterProvider router={router}/>;
};
exports.App = App;
