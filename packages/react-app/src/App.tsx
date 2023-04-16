import { useQuery } from "@tanstack/react-query";
import { Example } from "./Example";
import "./index.css";

const Hello = () => {
  const { data } = useQuery(["/hello"]);

  console.log({ data });
  return <pre>{JSON.stringify(data)}</pre>;
};

export function App() {
  return (
    <>
      <Hello />
      <Example />
    </>
  );
}
