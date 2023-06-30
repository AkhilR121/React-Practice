import { useImmer } from "use-immer";
import { Action } from "./dataGridReducer";

export function TableHead({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const [toggle, setToggle] = useImmer(false);

  function handleNameInput(input: string) {
    dispatch({ type: "search-name", input: input });
  }
  function handleCompanyInp(input: string) {
    dispatch({ type: "company-name", input: input });
  }
  function handleLocation(input: string) {
    dispatch({ type: "location", input: input });
  }
  function handleIdInp(input: number) {
    dispatch({ type: "id-inp", input: input });
  }
  function handleRatingInp(input: number) {
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
  return (
    <thead>
      <tr className="text-lg [&>*]:border-2 [&>*]:p-3">
        <th>
          <div className="flex justify-between px-2">
            Id{" "}
            <button
              className="active:scale-125"
              onClick={() => {
                setToggle(!toggle);
                toggle ? handleIdAsc() : handleIdDec();
              }}
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              handleIdInp(Number(e.target.value));
            }}
            className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"
          />
        </th>
        <th>
          <div className="flex justify-between px-2">
            Employee Name{" "}
            <button
              className="active:scale-125"
              onClick={() => {
                setToggle(!toggle);
                toggle ? handleNameAsc() : handleNameDec();
              }}
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              handleNameInput(e.target.value);
            }}
            className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"
          />
        </th>
        <th>
          <div className="flex justify-between px-2">
            Company_Name{" "}
            <button
              className="active:scale-125"
              onClick={() => {
                setToggle(!toggle);
                toggle ? handleCompanyAsc() : handleCompanyDec();
              }}
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              handleCompanyInp(e.target.value);
            }}
            className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"
          />
        </th>
        <th>
          <div className="flex justify-between px-2">
            Location{" "}
            <button
              className="active:scale-125"
              onClick={() => {
                setToggle(!toggle);
                toggle ? handleLocationAsc() : handleLocationDec();
              }}
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              handleLocation(e.target.value);
            }}
            className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"
          />
        </th>
        <th>
          <div className="flex justify-between gap-10 px-2">
            <p>Salary </p>
            <button
              className="active:scale-125"
              onClick={() => {
                setToggle(!toggle);
                toggle ? handleSalaryAsc() : handleSalarydec();
              }}
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <br />
        </th>
        <th>
          <div className="flex justify-between px-2">
            Rating{" "}
            <button
              className="active:scale-125"
              onClick={() => {
                setToggle(!toggle);
                toggle ? handRatingAsc() : handRatingDec();
              }}
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => {
              handleRatingInp(Number(e.target.value));
            }}
            className="w-52 rounded-md px-2 py-2 text-sm font-normal shadow-lg focus:border-b-2 focus:shadow-2xl focus:outline-none"
          />
        </th>
      </tr>
    </thead>
  );
}
