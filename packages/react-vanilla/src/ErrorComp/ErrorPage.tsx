import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gray-300 text-center text-4xl font-bold">
      Oops!
      <span className="text-xl font-normal">
        Sorry Unexpected Error Occured
      </span>
      <Link
        to={"/"}
        className="rounded-md bg-white p-2 px-4 text-base font-semibold transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-md"
      >
        Back to home
      </Link>
    </div>
  );
}
