export function Navbar() {
  return (
    <>
      <div className="flex w-[100%] items-center justify-between bg-[rgb(241,39,97)] shadow-2xl">
        <div>
          <div className="px-3 font-serif text-2xl font-semibold text-black">
            Shopping App
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="">
            <ul className="flex cursor-pointer gap-5 font-serif text-lg font-medium [&>*]:border-b-4 [&>*]:border-black [&>*]:px-2 [&>*]:py-4 hover:[&>*]:bg-pink-900">
              <li className="transition delay-100 duration-200 ease-in-out hover:border-white hover:text-white">
                Men
              </li>
              <li className="transition delay-100 duration-200 ease-in-out hover:border-white hover:text-white">
                Women
              </li>
              <li className="transition delay-100 duration-200 ease-in-out hover:border-white hover:text-white">
                Kids
              </li>
              <li className="transition delay-100 duration-200 ease-in-out hover:border-white hover:text-white">
                Furniture
              </li>
              <li className="transition delay-100 duration-200 ease-in-out hover:border-white hover:text-white">
                Sale
              </li>
            </ul>
          </div>
          <div className="relative">
            <i className="bi bi-search absolute right-0 p-3 text-xl"></i>
            <input
              className="w-96 border-b-2 border-black bg-transparent p-2 px-4 font-serif text-lg font-medium placeholder-slate-700 focus:border-white focus:outline-none"
              type="text"
              placeholder="Search Products"
            />
          </div>
        </div>

        <div className="cursor-pointer pr-5 font-serif text-xl font-medium">
          Login
        </div>
      </div>
    </>
  );
}
