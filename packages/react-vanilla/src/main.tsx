import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import invariant from "tiny-invariant";
import { App } from "./App";
import { Provider } from "./Provider";
import "./index.css";
const rootEl = document.getElementById("root");
invariant(rootEl, "root element not found");

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(rootEl);

root.render(
  <Provider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
);
