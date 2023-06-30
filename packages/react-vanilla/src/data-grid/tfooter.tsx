import { map, pipe, range, toArray } from "@ti/core";
import React from "react";
import { Action } from "./dataGridReducer";

export function TableFooter({
  empListLength,
  dispatch,
}: {
  empListLength: number;
  dispatch: React.Dispatch<Action>;
}) {
  function handlePageNumber(pg: number) {
    dispatch({ type: "pagination", currPage: pg });
  }

  const pages = pipe(
    range(1, Math.ceil((empListLength + 1) / 10)),
    map(x => x),
    toArray
  );

  return (
    <div className="flex justify-center">
      <div className="mt-5 flex h-[5rem] justify-center gap-5 rounded-full bg-slate-300 px-3 pt-1 text-white shadow-2xl">
        {pages.map((pg, i) => {
          return (
            <div key={i}>
              {i === 0 && (
                <button
                  autoFocus
                  className="my-3 w-12 rounded-full border-slate-600 bg-slate-600 p-3 font-semibold focus:border-2 focus:bg-slate-100 focus:text-black active:scale-125"
                  onClick={() => {
                    handlePageNumber(pg);
                  }}
                  key={1}
                >
                  {pg}
                </button>
              )}
              {i > 0 && (
                <button
                  className="my-3 w-12 rounded-full border-slate-600 bg-slate-600 p-3 font-semibold transition-all duration-150 ease-in-out focus:border-2 focus:bg-slate-100 focus:text-black active:scale-125"
                  onClick={() => {
                    handlePageNumber(pg);
                  }}
                  key={i + 1}
                >
                  {pg}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
