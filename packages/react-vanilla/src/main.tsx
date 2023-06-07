import ReactDOM from "react-dom/client";
import invariant from "tiny-invariant";
import { App } from "./App";
import { Provider } from "./Provider";
import "./index.css";

const rootEl = document.getElementById("root");
invariant(rootEl, "root element not found");

const root = ReactDOM.createRoot(rootEl);

root.render(
  <Provider>
    <App />
  </Provider>
);
