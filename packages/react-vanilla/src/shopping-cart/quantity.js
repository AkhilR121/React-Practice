"use strict";
exports.__esModule = true;
exports.Quantity = void 0;
function Quantity(_a) {
    var quantity = _a.quantity, onInc = _a.onInc, onDec = _a.onDec;
    return (<>
      <div className="mr-12 flex flex-col items-center">
        <button onClick={function (e) {
            e.preventDefault();
            onDec();
        }} className="rounded-full bg-slate-600 px-2">
          <i className="bi bi-dash text-white"></i>
        </button>
        <div className={"text-xl font-medium"}>{quantity}</div>
        <button onClick={function (e) {
            e.preventDefault();
            onInc();
        }} className="rounded-full  bg-slate-600 px-2">
          <i className="bi bi-plus text-white"></i>
        </button>
      </div>
    </>);
}
exports.Quantity = Quantity;
