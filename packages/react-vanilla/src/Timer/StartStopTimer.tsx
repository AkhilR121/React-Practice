import { useImmer } from "use-immer";

export function StartStopTimer({
  start,
  stop,
}: {
  start: () => void;
  stop: () => void;
}) {
  const [toggle, setToggle] = useImmer<boolean>(true);

  return (
    <button
      onClick={() => {
        setToggle(!toggle);
        toggle ? start() : stop();
      }}
      className="bg-green-400 p-3 text-2xl font-semibold"
    >
      {toggle ? "Start" : "Stop"}
    </button>
  );
}
