"use strict";
exports.__esModule = true;
exports.CartItems = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var quantity_1 = require("./quantity");
function CartItems(_a) {
    var products = _a.products, dispatch = _a.dispatch, state = _a.state;
    var _b = (0, react_1.useState)(false), toggle = _b[0], setToggle = _b[1];
    return (<div className="scrollbar-hide mt-10 flex h-[85vh] w-[50%] flex-col gap-5 overflow-y-scroll p-5">
      <div className="text-2xl font-medium text-gray-800">
        Subtotal ({state.reduce(function (a, s) { return a + s.quantity; }, 0)} Items){" "}
        <sup className="text-sm">&#8377;</sup>
        <span className="font-bold">
          {state
            .map(function (ci) {
            var product = products.find(function (p) { return p.id === ci.id; });
            return product.price * ci.quantity;
        })
            .reduce(function (a, b) { return a + b; }, 0)}
        </span>
        <sup className="text-sm">00</sup>
      </div>
      <div className="text-sm text-gray-700">
        <p>
          EMI Available {""}
          <a className="font-medium text-green-700" href="#">
            Details
          </a>
        </p>
        <p className="flex items-center">
          <i className="bi bi-patch-check-fill pr-1 text-lg text-green-700"></i>
          <span className="font-medium text-green-700">
            Your order is eligible for FREE Delivery.
          </span>{" "}
          Select this option at checkout.{" "}
          <a className="font-medium text-green-700" href="#">
            Details
          </a>
        </p>
      </div>
      <Offers setToggle={setToggle} toggle={toggle}/>

      {state.map(function (item) { return (<CartItem product={products.find(function (p) { return p.id === item.id; })} quantity={item.quantity} dispatch={dispatch}/>); })}
      <button className="m-auto w-52 rounded-md bg-[rgb(241,39,97)] p-3 px-5 font-semibold hover:opacity-90">
        Proceed to Buy
      </button>
    </div>);
}
exports.CartItems = CartItems;
function CartItem(_a) {
    var product = _a.product, quantity = _a.quantity, dispatch = _a.dispatch;
    var id = product.id, image = product.image, item_name = product.item_name, price = product.price;
    function handleDecQuantity() {
        dispatch({ type: "dec_item", id: id });
    }
    function handleIncQuantity() {
        dispatch({ type: "inc_item", id: id });
    }
    return (<div key={id} className="flex items-center justify-between gap-5 rounded-xl border-2 bg-slate-200 p-3 font-semibold">
      <img src={image} className="h-28 w-28 rounded-full" alt="Image"/>
      <p className="mx-auto w-52 leading-4">
        {item_name} <br />
        <span className="text-xs font-normal text-gray-500">
          Eligible for FREE Shipping
        </span>
      </p>
      <quantity_1.Quantity quantity={quantity} onInc={handleIncQuantity} onDec={handleDecQuantity}/>

      <p className="w-20 p-1 text-xl font-bold">
        <sup className="text-sm">&#8377;</sup>
        {price * quantity}
        <sup className="text-sm">00</sup>
      </p>
    </div>);
}
function Offers(_a) {
    var setToggle = _a.setToggle, toggle = _a.toggle;
    return (<div className="my-4 rounded-md border-2 p-5">
      <h4 className="text-md flex items-center font-semibold">
        <i className="bi bi-patch-check-fill pr-2 text-xl"></i>
        Available Offers
      </h4>
      <div className="pt-4 text-[0.85rem] text-gray-800">
        <ul className="list-inside list-disc marker:text-gray-400">
          <li>5% Unlimited cashback on Flipkart Axis Bank Credit Card. TCA</li>
        </ul>
        <button onClick={function () {
            setToggle(!toggle);
        }} className={(0, clsx_1["default"])({ hidden: toggle }, "m-3 font-semibold text-[rgb(241,39,97)]")}>
          Show More <i className="bi bi-chevron-down text-xs"></i>
        </button>
        <div className={(0, clsx_1["default"])({ hidden: !toggle })}>
          <ul className="list-inside list-disc marker:text-gray-400">
            <li>
              Flat Rs 150 Cashback for select users or Up to Rs 500 Caseback
              onCRED Pay UPI (Android Devices only) on a minimum spend of Rs
              1000. TCA
            </li>
            <li>
              10% Cashback upto Rs 200 on Airtel Payments Bank transactions on a
              min spend of Rs 1000. TCA
            </li>
            <li>
              Get up to Rs 500 Cashback on mobikwik Wallet transaction on a min
              spend of Rs 1000. Use code MBK500 on Mobikwik. TCA
            </li>
          </ul>
          <button onClick={function () {
            setToggle(!toggle);
        }} className="m-3 font-semibold text-[rgb(241,39,97)]">
            Show less <i className="bi bi-chevron-up text-xs"></i>
          </button>
        </div>
      </div>
    </div>);
}
