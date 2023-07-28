import { motion } from "framer-motion";
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
      className=" bg-white p-3 px-6"
    >
      <motion.div whileTap={{ scale: 1.5 }}>
        {toggle ? <PlayIcon /> : <PauseIcon />}
      </motion.div>
    </button>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="currentColor"
      className="bi bi-play-fill transition delay-300 duration-500 ease-in-out"
      viewBox="0 0 16 16"
    >
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="currentColor"
      className="bi bi-pause"
      viewBox="0 0 16 16"
    >
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
    </svg>
  );
}
