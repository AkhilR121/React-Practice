import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type TodoAppProps = {
  handleClickAdd(text: string): void;
};

export function AddTask({ handleClickAdd }: TodoAppProps) {
  const [text, setText] = useState("");

  return (
    <div className="my-5 flex items-center justify-center">
      <input
        className="w-[80%] rounded-l-full p-4 caret-pink-500 shadow-xl outline-none"
        type="text"
        placeholder="Add List"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <AnimatePresence>
        <motion.button
          whileTap={{ scale: 1.1 }}
          className="rounded-r-full bg-green-700 p-3 shadow-2xl"
          onClick={() => {
            handleClickAdd(text);
            setText("");
          }}
        >
          <i className="bi bi-plus-lg text-[21px]"></i>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
