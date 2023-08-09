import {
  AccountIcon,
  AppIcon,
  InfoIcon,
  NotificationIcon,
  SearchIcon,
  ThemeIcon,
} from "./TrelloIcons";

export function NavBar() {
  const btns = ["Workspaces", "Recent", "Starred", "Templates"];
  const icons = [
    <NotificationIcon />,
    <InfoIcon />,
    <ThemeIcon />,
    <AccountIcon />,
  ];

  return (
    <div className="flex h-[8vh] justify-between bg-[#1D2125] p-2 font-['Inter'] text-sm text-[#85919D]">
      <div className="flex items-center">
        <AppIcon />
        <div className="mx-5 font-serif text-xl font-bold">Trello</div>
        <div className="flex gap-8">
          {btns.map((btn, i) => {
            return <button key={i}>{btn}</button>;
          })}
        </div>
        <div className="ml-5 rounded-md bg-[#579DFF] p-2 px-3 text-xs text-black">
          <button className="">Create</button>
        </div>
      </div>

      <div className="flex items-center gap-12">
        <div className="relative">
          <input
            className="rounded-md border-2 border-slate-700/50 bg-[#22272B] px-6 py-2 outline-none"
            type="text"
            name="Search"
            id="search-box"
            placeholder="Search"
          />
          <div className="absolute left-2 top-3">
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
