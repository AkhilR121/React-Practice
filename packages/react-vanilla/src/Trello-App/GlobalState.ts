import { atom } from "jotai";
import { InitialState } from "./types";

const initialState: InitialState[] = [
  {
    id: 1,
    title: "To Do",
    done: false,
  },
];

export const cardTitle = atom<InitialState[]>(initialState);
