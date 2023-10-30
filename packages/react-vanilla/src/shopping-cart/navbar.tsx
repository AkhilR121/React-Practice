import { Link } from "react-router-dom";
import { SearchIcon } from "./shopping-icons";

export function Navbar() {
  const navOptions: string[] = ["Men", "Women", "Kids", "Furniture", "Sale"];
  return (
    <>
      <div className="flex w-[100%] items-center justify-between bg-[rgb(241,39,97)] shadow-2xl">
        <div className="px-3 font-serif text-2xl font-semibold text-black">
          Shopping App
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex cursor-pointer gap-5 font-serif text-lg font-medium [&>*]:border-b-4 [&>*]:border-black [&>*]:px-2 [&>*]:py-4 hover:[&>*]:bg-pink-900">
            {navOptions.map((option, i) => {
              return <NavbarOptions key={i} option={option} />;
            })}
          </ul>

          <div className="relative">
            <SearchIcon />
            <input
              className="w-96 border-b-2 border-black bg-transparent p-2 px-6 font-serif text-lg font-medium placeholder-slate-700 focus:border-white focus:outline-none"
              type="text"
              placeholder="Search Products"
            />
          </div>
        </div>

        <div className="gpa-3 flex items-center">
          <Link
            to={"/cart"}
            className="cursor-pointer pr-5 font-serif text-xl font-medium"
          >
            Cart
          </Link>
          <Link
            to={"/login"}
            className="cursor-pointer pr-5 font-serif text-xl font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

function NavbarOptions({ option }: { option: string }) {
  return (
    <li className="transition delay-100 duration-200 ease-in-out hover:border-white hover:text-white">
      {option}
    </li>
  );
}
