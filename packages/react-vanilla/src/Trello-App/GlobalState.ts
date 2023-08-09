import { atom } from "jotai";

export type InitialState = Readonly<{
  id: number;
  title: string;
  done: boolean;
}>;

const initialState: InitialState[] = [
  {
    id: 1,
    title: "To Do",
    done: false,
  },
];

export const cardTitle = atom<InitialState[]>(initialState);
