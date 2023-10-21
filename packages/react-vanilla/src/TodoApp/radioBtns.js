"use strict";
exports.__esModule = true;
exports.RadioBtns = void 0;
function RadioBtns(_a) {
    var radioBtn = _a.radioBtn, handleRadioBtns = _a.handleRadioBtns;
    return (<div className="flex items-center justify-center gap-10 font-['Fira_Sans'] font-semibold [&>*]:accent-green-700">
      <div>
        <label className="cursor-pointer text-xl">
          <input checked={radioBtn === "complete"} value="complete" onChange={function (e) {
            handleRadioBtns(e.target.value);
        }} className="mx-1 h-4 w-4" type="radio" name="default-radio"/>
          Completed
        </label>
      </div>

      <div>
        <label className="cursor-pointer text-xl">
          <input className="mx-1 h-4 w-4" value="incomplete" checked={radioBtn === "incomplete"} onChange={function (e) {
            handleRadioBtns(e.target.value);
        }} type="radio" name="default-radio"/>
          Incomplete
        </label>
      </div>

      <div>
        <label className="cursor-pointer text-xl">
          <input className="mx-1 h-4 w-4" checked={radioBtn === "all"} value="all" onChange={function (e) {
            handleRadioBtns(e.target.value);
        }} type="radio" name="default-radio"/>
          All
        </label>
      </div>
    </div>);
}
exports.RadioBtns = RadioBtns;
