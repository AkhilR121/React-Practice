"use strict";
exports.__esModule = true;
exports.TableHead = void 0;
var use_immer_1 = require("use-immer");
function TableHead(_a) {
    var dispatch = _a.dispatch;
    var _b = (0, use_immer_1.useImmer)(false), toggle = _b[0], setToggle = _b[1];
    function handleNameInput(input) {
        dispatch({ type: "search-name", input: input });
    }
    function handleCompanyInp(input) {
        dispatch({ type: "company-name", input: input });
    }
    function handleLocation(input) {
        dispatch({ type: "location", input: input });
    }
    function handleIdInp(input) {
        dispatch({ type: "id-inp", input: input });
    }
    function handleRatingInp(input) {
        dispatch({ type: "rating-inp", input: input });
    }
    // Sorting by ID
    function handleIdAsc() {
        dispatch({ type: "sort-id-asc" });
    }
    function handleIdDec() {
        dispatch({ type: "sort-id-dec" });
    }
    // Sorting by ID
    // Sorting by Salary
    function handleSalaryAsc() {
        dispatch({ type: "sort-salary-asc" });
    }
    function handleSalarydec() {
        dispatch({ type: "sort-salary-dec" });
    }
    // Sorting by Salary
    // Sorting by Rating
    function handRatingAsc() {
        dispatch({ type: "sort-rating-asc" });
    }
    function handRatingDec() {
        dispatch({ type: "sort-rating-dec" });
    }
    // Sorting by Rating
    // Sorting by Name
    function handleNameAsc() {
        dispatch({ type: "sort-name-asc" });
    }
    function handleNameDec() {
        dispatch({ type: "sort-name-dec" });
    }
    // Sorting by Name
    function handleCompanyAsc() {
        dispatch({ type: "sort-company-asc" });
    }
    function handleCompanyDec() {
        dispatch({ type: "sort-company-dec" });
    }
    function handleLocationAsc() {
        dispatch({ type: "sort-location-asc" });
    }
    function handleLocationDec() {
        dispatch({ type: "sort-location-dec" });
    }
    return (<thead>
      <tr className="text-lg [&>*]:border-2 [&>*]:p-3">
        <th>
          <div className="flex justify-between px-2">
            Id{" "}
            <button className="active:scale-125" onClick={function () {
            setToggle(!toggle);
            toggle ? handleIdAsc() : handleIdDec();
        }}>
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input type="text" placeholder="Search..." onChange={function (e) {
            handleIdInp(Number(e.target.value));
        }} className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"/>
        </th>
        <th>
          <div className="flex justify-between px-2">
            Employee Name{" "}
            <button className="active:scale-125" onClick={function () {
            setToggle(!toggle);
            toggle ? handleNameAsc() : handleNameDec();
        }}>
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input type="text" placeholder="Search..." onChange={function (e) {
            handleNameInput(e.target.value);
        }} className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"/>
        </th>
        <th>
          <div className="flex justify-between px-2">
            Company_Name{" "}
            <button className="active:scale-125" onClick={function () {
            setToggle(!toggle);
            toggle ? handleCompanyAsc() : handleCompanyDec();
        }}>
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input type="text" placeholder="Search..." onChange={function (e) {
            handleCompanyInp(e.target.value);
        }} className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"/>
        </th>
        <th>
          <div className="flex justify-between px-2">
            Location{" "}
            <button className="active:scale-125" onClick={function () {
            setToggle(!toggle);
            toggle ? handleLocationAsc() : handleLocationDec();
        }}>
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input type="text" placeholder="Search..." onChange={function (e) {
            handleLocation(e.target.value);
        }} className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"/>
        </th>
        <th>
          <div className="flex justify-between gap-10 px-2">
            <p>Salary </p>
            <button className="active:scale-125" onClick={function () {
            setToggle(!toggle);
            toggle ? handleSalaryAsc() : handleSalarydec();
        }}>
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <br />
        </th>
        <th>
          <div className="flex justify-between px-2">
            Rating{" "}
            <button className="active:scale-125" onClick={function () {
            setToggle(!toggle);
            toggle ? handRatingAsc() : handRatingDec();
        }}>
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input type="text" placeholder="Search..." onChange={function (e) {
            handleRatingInp(Number(e.target.value));
        }} className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"/>
        </th>
      </tr>
    </thead>);
}
exports.TableHead = TableHead;
