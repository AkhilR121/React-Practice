import { Link } from "react-router-dom";

export function Root(): JSX.Element {
  const routeObj: string[] = [
    "counter",
    "trello",
    "ShoppingCart",
    "TodoApp",
    "DataGridApp",
    "TimerApp",
    "RQuery",
    "MultiStepForm",
  ];
  return (
    <div className="h-screen w-full bg-gradient-to-br from-purple-600 to-fuchsia-400">
      <h1 className="py-11 text-center text-6xl font-bold text-white">
        React Apps
      </h1>
      <div className="m-auto grid max-w-xl grid-cols-3 gap-4 [&>*]:my-2">
        {routeObj.map(route => {
          return (
            <Link
              className="rounded-md border-[1px] border-white to-black/70 p-3 text-center text-xl font-semibold capitalize text-white transition-all duration-200 ease-in-out hover:scale-110 hover:bg-white hover:text-black hover:shadow-xl"
              to={route}
            >
              {route}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
