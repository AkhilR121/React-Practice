import { useImmerReducer } from "use-immer";
import { reducer } from "./dataGridReducer";
import { DataGridState, empList } from "./empData";
import { TableBody } from "./tbody";
import { TableFooter } from "./tfooter";
import { TableHead } from "./thead";

export const initial: DataGridState = {
  filtered: empList,
  original: empList,
};

export function DataGridApp() {
  const [state, dispatch] = useImmerReducer(reducer, initial);

  return (
    <>
      <div className="scrollbar-hide h-screen  overflow-y-scroll bg-gray-100 text-black">
        <h1 className="mb-2 text-center font-['Fira_Sans'] text-3xl font-bold underline">
          DataGrid
        </h1>
        <div>
          <table className="m-auto">
            <TableHead dispatch={dispatch} />
            <TableBody
              employees={state.filtered}
              pgNumber={state.filtered[0]?.pageNumber as number}
            />
          </table>
          <TableFooter
            empListLength={state.filtered.length}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
}
