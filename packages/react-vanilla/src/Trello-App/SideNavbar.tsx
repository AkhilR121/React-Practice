import {
  BoardsIcon,
  CalendarIcon,
  LeftToggleIcon,
  MembersIcon,
  TableIcon,
  WorkspaceIcon,
} from "./TrelloIcons";
import { SideNavOptProps, WorkSpaceOptProps } from "./types";

const sideNavOptions: SideNavOptProps[] = [
  {
    id: 1,
    icon: <BoardsIcon />,
    title: "Boards",
  },
  {
    id: 2,
    icon: <MembersIcon />,
    title: "Members",
  },
  {
    id: 3,
    icon: <WorkspaceIcon />,
    title: "Workspace Settings",
  },
];

const workSpaceOpt: WorkSpaceOptProps[] = [
  {
    id: 1,
    icon: <TableIcon />,
    title: "Table",
  },
  {
    id: 2,
    icon: <CalendarIcon />,
    title: "Calendar",
  },
];
export function SideNavbar() {
  return (
    <div className="flex w-[20%] flex-col bg-[#191B1E]/95 text-[#9DACBA]">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="font-Lato flex items-center justify-between gap-5 border-b-[1.5px] border-gray-700/50">
      <div className="flex items-center">
        <span className="m-3 rounded-md bg-gradient-to-b from-[#3CAB7D] via-[#3CAB7D] to-[#3CAB7D]/20 px-3 py-1 text-xl font-bold text-black">
          T
        </span>
        <div className="flex flex-col text-sm">
          <h1 className="font-semibold tracking-wide">Trello Workspace</h1>
          <span className="text-xs">Free</span>
        </div>
      </div>
      <button className="mr-5 rounded-sm p-2.5 hover:bg-gray-700/60">
        <LeftToggleIcon />
      </button>
    </header>
  );
}

function MainContent() {
  return (
    <main className="font-Lato grow text-sm">
      <ul className="flex cursor-pointer flex-col [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:p-1.5 [&>*]:px-4">
        {sideNavOptions.map(opt => (
          <SideNavOptions key={opt.id} opt={opt} />
        ))}
      </ul>

      <h3 className="p-2 font-semibold">Workspace views</h3>
      <ul className="flex flex-col italic [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:p-1.5 [&>*]:px-4">
        {workSpaceOpt.map(opt => (
          <WorkSpaceOptions key={opt.id} opt={opt} />
        ))}
      </ul>
      <h1 className="p-2 text-sm font-semibold">Your boards</h1>
    </main>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center px-1">
      <button className="m-2 w-full rounded-sm bg-gradient-to-r from-[#9F8FEF] via-[#9F8FEF] to-[#ED04F7]/40 px-4 py-2 text-left text-sm text-black">
        Try Premium free
      </button>
    </footer>
  );
}

function SideNavOptions({ opt }: { opt: SideNavOptProps }) {
  return (
    <div key={opt.id} className="hover:bg-gray-600">
      <li>{opt.icon}</li>
      <h5>{opt.title}</h5>
    </div>
  );
}
function WorkSpaceOptions({ opt }: { opt: WorkSpaceOptProps }) {
  return (
    <div key={opt.id} className="hover:bg-gray-600">
      <li>{opt.icon}</li>
      <h5>{opt.title}</h5>
    </div>
  );
}
