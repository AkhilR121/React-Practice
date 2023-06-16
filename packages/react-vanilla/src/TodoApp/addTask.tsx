import { useState } from "react";

type TodoAppProps = {
  handleClickAdd(text: string): void;
};

export function AddTask({ handleClickAdd }: TodoAppProps) {
  const [text, setText] = useState("");

  return (
    <div className="my-5 flex items-center gap-4">
      <input
        className="w-[90%] border-b-2 border-black p-4 outline-none"
        type="text"
        placeholder="Enter TodoList"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        className="rounded-full bg-green-600 p-2 px-4 pb-3 text-3xl font-bold text-green-950"
        onClick={() => {
          handleClickAdd(text);
          setText("");
        }}
      >
        +
      </button>
    </div>
  );
}
