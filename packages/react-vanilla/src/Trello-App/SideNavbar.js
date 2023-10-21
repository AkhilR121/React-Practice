"use strict";
exports.__esModule = true;
exports.SideNavbar = void 0;
var TrelloIcons_1 = require("./TrelloIcons");
function SideNavbar() {
    return (<div className="flex w-[19%] flex-col bg-[#1D2125] bg-opacity-95 text-[#85919D]">
      <Header />
      <MainContent />
      <Footer />
    </div>);
}
exports.SideNavbar = SideNavbar;
function Header() {
    return (<header className="flex items-center justify-between gap-5 border-b-2 border-gray-700">
      <div className="flex items-center">
        <span className="m-3 rounded-sm bg-[#3CAB7D] px-3 py-1 text-xl font-bold text-black">
          T
        </span>
        <h1>Trello Workspace</h1>
      </div>
      <button className="mr-5 bg-gray-800/25 p-2">
        <TrelloIcons_1.LeftToggleIcon />
      </button>
    </header>);
}
function MainContent() {
    return (<main className="grow text-sm">
      <ul className="flex flex-col pl-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:p-1">
        <li className="hover:bg-gray-600">
          <TrelloIcons_1.BoardsIcon />
          <h5>Boards</h5>
        </li>
        <li className="hover:bg-gray-600">
          <TrelloIcons_1.MembersIcon />
          <h5>Members</h5>
        </li>
        <li className="hover:bg-gray-600">
          <TrelloIcons_1.WorkspaceIcon />
          <h5>Workspace settings</h5>
        </li>
        <h3 className="m-1 font-semibold">Workspace views</h3>
      </ul>

      <ul className="flex flex-col pl-2 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:p-1">
        <li className="hover:bg-gray-600">
          <TrelloIcons_1.TableIcon />
          <h5>Table</h5>
        </li>
        <li className="hover:bg-gray-600">
          <TrelloIcons_1.CalendarIcon />
          <h5>Calendar</h5>
        </li>
      </ul>
      <h1 className="pl-3 text-base font-semibold">Your boards</h1>
    </main>);
}
function Footer() {
    return (<footer className="flex justify-center px-1">
      <button className="m-2 w-full rounded-sm bg-gradient-to-r from-[#9F8FEF] via-[#9F8FEF] to-[#ED04F7] px-4 py-2 text-left text-sm text-black">
        Try Premium free
      </button>
    </footer>);
}
