import ReactDOM from "react-dom/client";
import invariant from "tiny-invariant";
import { App } from "./App";

const rootEl = document.getElementById("root");
invariant(rootEl, "root element not found");

const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
