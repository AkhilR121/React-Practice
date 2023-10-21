"use strict";
exports.__esModule = true;
exports.ShoppingItems = void 0;
function ShoppingItems(_a) {
    var items = _a.items, dispatch = _a.dispatch;
    function handleAddToCart(item) {
        dispatch({ type: "add_item", id: item.id });
    }
    return (<>
      <div className="scrollbar-hide mt-10 grid h-[85vh] w-[50%] grid-cols-2 gap-10 overflow-y-scroll p-5">
        {items.map(function (item) {
            return (<div className="flex translate-x-0 cursor-pointer flex-col shadow-xl transition delay-150 duration-150 hover:shadow-2xl" key={item.id}>
              <div className="relative">
                <div className="absolute bottom-0.5 m-2 rounded-sm bg-white/70 p-1 text-xs font-bold shadow-xl ">
                  {item.rating}
                  <i className="bi bi-star-fill pl-1 text-[rgb(241,39,97)]"></i>{" "}
                  | {Math.floor(Math.random() * 1000)}
                </div>
                <img src={item.image} className="h-52 w-[100%] object-fill object-center" alt="Shopping Items"/>
              </div>
              <div className="flex grow flex-col p-3">
                <p className="py-1 text-lg font-bold tracking-wide">
                  {item.item_name}
                </p>
                <p className="grow text-xs text-gray-600">{item.description}</p>
                <div className="py-3 text-sm font-bold">
                  <sup className="text-xs">&#8377;</sup>
                  <span className="text-lg">{item.price} </span>
                  <span className="text-xs font-normal text-gray-800">
                    M.R.P: &#8377; <span className="line-through">1999</span>{" "}
                    <span className="text-[rgb(241,39,97)]">
                      ({Math.floor(Math.random() * 50)}% OFF)
                    </span>
                  </span>
                  <p className="text-xs font-normal leading-3">
                    Flat INR 1000 Off on SBICards
                  </p>
                </div>
              </div>
              <div>
                <button onClick={function (e) {
                    e.preventDefault();
                    handleAddToCart(item);
                }} className="flex w-[100%] items-center justify-center gap-3 bg-[rgb(241,39,97)] p-2 font-sans text-base font-semibold tracking-wide hover:bg-[rgb(203,33,81)]">
                  Add to cart
                </button>
              </div>
            </div>);
        })}
      </div>
    </>);
}
exports.ShoppingItems = ShoppingItems;
