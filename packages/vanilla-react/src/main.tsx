import ReactDOM from "react-dom/client";
import invariant from "tiny-invariant";

const root = document.getElementById("root");
invariant(root, "root element not found");

const App = () => <h1>Hello World</h1>;

ReactDOM.createRoot(root).render(<App />);
