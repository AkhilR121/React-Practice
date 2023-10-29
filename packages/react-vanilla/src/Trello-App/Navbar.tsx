import {
  AccountIcon,
  AppIcon,
  DropDownIcon,
  InfoIcon,
  NotificationIcon,
  SearchIcon,
  ThemeIcon,
} from "./TrelloIcons";
// import "./Trello.css";
export function NavBar() {
  const btns: string[] = ["Workspaces", "Recent", "Starred", "Templates"];
  const icons: JSX.Element[] = [
    <NotificationIcon />,
    <InfoIcon />,
    <ThemeIcon />,
    <AccountIcon />,
  ];

  return (
    <div className="flex h-[6vh] justify-between bg-[#1D2125] p-2 text-sm text-[#9DACBA]">
      <div className="flex items-center">
        <AppIcon />
        <div className="font-Lato mx-5 text-xl font-bold">Trello</div>
        <div className="flex gap-5">
          {btns.map((btn, i) => {
            return (
              <button
                className="font-Lato flex items-center justify-between gap-2 rounded-sm px-2 py-1.5 hover:bg-gray-700/60"
                key={i}
              >
                {btn}{" "}
                <span>
                  <DropDownIcon />
                </span>
              </button>
            );
          })}
        </div>
        <button className="font-Lato ml-5 rounded-sm bg-[#579DFF] p-1.5 px-3 text-sm tracking-wide text-black">
          Create
        </button>
      </div>

      <div className="flex items-center gap-12">
        <div className="relative">
          <input
            className="font-Lato rounded-md border-2 border-slate-700/50 bg-[#22272B] px-7 py-1 outline-none"
            type="text"
            name="Search"
            id="search-box"
            placeholder="Search"
          />
          <div className="absolute left-2 top-2.5">
            <SearchIcon />
          </div>
        </div>
        <ul className="flex items-center gap-2">
          {icons.map((icon, i) => {
            return <li key={i}>{icon}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
