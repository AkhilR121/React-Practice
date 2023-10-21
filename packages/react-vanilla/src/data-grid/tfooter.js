"use strict";
exports.__esModule = true;
exports.TableFooter = void 0;
var core_1 = require("@ti/core");
var react_1 = require("react");
function TableFooter(_a) {
    var empListLength = _a.empListLength, dispatch = _a.dispatch;
    function handlePageNumber(pg) {
        dispatch({ type: "pagination", currPage: pg });
    }
    var pages = (0, core_1.pipe)((0, core_1.range)(1, Math.ceil((empListLength + 1) / 10)), (0, core_1.map)(function (x) { return x; }), core_1.toArray);
    return (<div className="flex justify-center">
      <div className="mt-5 flex h-[5rem] justify-center gap-5 rounded-full bg-slate-300 px-3 pt-1 text-white shadow-2xl">
        {pages.map(function (pg, i) {
            return (<div key={i}>
              {i === 0 && (<button autoFocus className="my-3 w-12 rounded-full border-slate-600 bg-slate-600 p-3 font-semibold focus:border-2 focus:bg-slate-100 focus:text-black active:scale-125" onClick={function () {
                        handlePageNumber(pg);
                    }} key={1}>
                  {pg}
                </button>)}
              {i > 0 && (<button className="my-3 w-12 rounded-full border-slate-600 bg-slate-600 p-3 font-semibold transition-all duration-150 ease-in-out focus:border-2 focus:bg-slate-100 focus:text-black active:scale-125" onClick={function () {
                        handlePageNumber(pg);
                    }} key={i + 1}>
                  {pg}
                </button>)}
            </div>);
        })}
      </div>
    </div>);
}
exports.TableFooter = TableFooter;
