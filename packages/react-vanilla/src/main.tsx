import ReactDOM from "react-dom/client";
import invariant from "tiny-invariant";
import { App } from "./App";
import { Provider } from "./Provider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const rootEl = document.getElementById("root");
invariant(rootEl, "root element not found");

const root = ReactDOM.createRoot(rootEl);

root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
