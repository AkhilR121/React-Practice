"use strict";
exports.__esModule = true;
exports.DataGridApp = exports.initial = void 0;
var use_immer_1 = require("use-immer");
var dataGridReducer_1 = require("./dataGridReducer");
var empData_1 = require("./empData");
var tbody_1 = require("./tbody");
var tfooter_1 = require("./tfooter");
var thead_1 = require("./thead");
exports.initial = {
    filtered: empData_1.empList,
    original: empData_1.empList
};
function DataGridApp() {
    var _a;
    var _b = (0, use_immer_1.useImmerReducer)(dataGridReducer_1.reducer, exports.initial), state = _b[0], dispatch = _b[1];
    return (<>
      <div className="scrollbar-hide h-screen  overflow-y-scroll bg-gray-100 text-black">
        <h1 className="mb-2 text-center font-['Fira_Sans'] text-3xl font-bold underline">
          DataGrid
        </h1>
        <div>
          <table className="m-auto">
            <thead_1.TableHead dispatch={dispatch}/>
            <tbody_1.TableBody employees={state.filtered} pgNumber={(_a = state.filtered[0]) === null || _a === void 0 ? void 0 : _a.pageNumber}/>
          </table>
          <tfooter_1.TableFooter empListLength={state.filtered.length} dispatch={dispatch}/>
        </div>
      </div>
    </>);
}
exports.DataGridApp = DataGridApp;
