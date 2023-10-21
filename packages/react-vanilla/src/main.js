"use strict";
exports.__esModule = true;
var react_query_1 = require("@tanstack/react-query");
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var client_1 = require("react-dom/client");
var tiny_invariant_1 = require("tiny-invariant");
var App_1 = require("./App");
var Provider_1 = require("./Provider");
require("./index.css");
var rootEl = document.getElementById("root");
(0, tiny_invariant_1["default"])(rootEl, "root element not found");
var queryClient = new react_query_1.QueryClient();
var root = client_1["default"].createRoot(rootEl);
root.render(<Provider_1.Provider>
    <react_query_1.QueryClientProvider client={queryClient}>
      <App_1.App />
      <react_query_devtools_1.ReactQueryDevtools />
    </react_query_1.QueryClientProvider>
  </Provider_1.Provider>);
