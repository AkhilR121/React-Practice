import { Heading, Button } from "@chakra-ui/react";
import "./Shuffle.css";
import { every, map, notNil, pipe, range, toArray } from "@ti/core";
import { shuffleNumbers } from "../../../../ts-app/src/programs/dom/shuffleNumbers";
import React, { Reducer } from "react";
import { produce } from "immer";
import invariant from "tiny-invariant";

type Button = {
  id: number;
  value: number;
};

type State = Readonly<{
  cells: Array<Button>;
  isCompleted: boolean;
}>;

type Action = { type: "click"; id: number };

const intializeState = (): State => {
  const shuffledNumbers: number[] = shuffleNumbers(16);
  return {
    cells: pipe(
      range(0, 16),
      map(i => ({
        id: i,
        value: notNil(shuffledNumbers[i]), //Type Guard
      })),
      toArray
    ),
    isCompleted: false,
  };
};

const getVerticalNeighbour = (id: number): number[] => {
  return [id - 4, id + 4].filter(e => e < 16 && e > -1);
};

const getHorizontalNeighbour = (id: number): number[] => {
  return [id - 1, id + 1].filter(e => e < 16 && e > -1);
};

const isAscending = (array: readonly number[]): boolean => {
  return pipe(
    range(1, 15),
    every(e => notNil(array[e]) >= notNil(array[e - 1]))
  );
};

const getRowNumber = (id: number): number => Math.floor(id / 4);

const shuffleReducer: Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  return produce(state, draft => {
    const clickedButton = draft.cells.find(o => o.id === action.id);
    const targetButton = draft.cells.find(o => o.value === 0);

    invariant(clickedButton && targetButton, "Error in reducer function");
    [clickedButton.value, targetButton.value] = [
      targetButton.value,
      clickedButton.value,
    ];

    draft.isCompleted = isAscending(draft.cells.map(o => o.value));
  });
};

function GameGrid(): JSX.Element {
  const initialState = intializeState();
  const [state, dispatch] = React.useReducer(shuffleReducer, initialState);

  const indexedButtons = pipe(range(0, 16), toArray).map(i => (
    <Button
      key={i + 1}
      id={`${i}`}
      onClick={e => {
        handleClick(e);
      }}
      pointerEvents={state.isCompleted ? "none" : "inherit"}
    >
      {notNil(state.cells[i]).value === 0 ? " " : notNil(state.cells[i]).value}
    </Button> //Type guard
  ));

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const clickedButton = event.target;

    if (!(clickedButton instanceof HTMLElement)) return;
    const buttonId = Number(clickedButton.id);

    if (
      getVerticalNeighbour(buttonId)
        .map(b => state.cells[b])
        .some(b => notNil(b).value === 0) //Type guard
    ) {
      dispatch({ type: "click", id: buttonId });
    }

    if (
      getHorizontalNeighbour(buttonId).some(
        e =>
          getRowNumber(e) === getRowNumber(buttonId) &&
          notNil(state.cells[e]).value === 0 //Type guard
      )
    ) {
      dispatch({ type: "click", id: buttonId });
    }
  }

  return <div className="grid-container">{indexedButtons}</div>;
}

export default function ShuffleView(): JSX.Element {
  return (
    <>
      <Heading as="h1" textAlign={"center"} marginBottom={"2rem"}>
        Shuffle Game
      </Heading>
      <GameGrid></GameGrid>
    </>
  );
}
