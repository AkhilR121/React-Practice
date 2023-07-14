import { useImmer } from "use-immer";

export function StopTimer({ dispatch }: { dispatch: any }) {
  const [toggle, setToggle] = useImmer(true);

  return (
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
      className="bg-green-400 p-3 text-2xl font-semibold"
    >
      {toggle ? "Start" : "Stop"}
    </button>
  );
}
