import clsx from "clsx";
import { useState } from "react";
import { Product } from "./fakerData";
import { Quantity } from "./quantity";
import { Action, State } from "./shoppingCart";

export function CartItems({
  products,
  dispatch,
  state,
}: {
  products: Product[];
  dispatch: React.Dispatch<Action>;
  state: State;
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="scrollbar-hide mt-10 flex h-[85vh] w-[50%] flex-col gap-5 overflow-y-scroll p-5">
      <div className="text-2xl font-medium text-gray-800">
        Subtotal ({state.reduce((a, s) => a + s.quantity, 0)} Items){" "}
        <sup className="text-sm">&#8377;</sup>
        <span className="font-bold">
          {state
            .map(ci => {
              const product = products.find(p => p.id === ci.id) as Product;
              return product.price * ci.quantity;
            })
            .reduce((a, b) => a + b, 0)}
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
      <Offers setToggle={setToggle} toggle={toggle} />

      {state.map(item => (
        <CartItem
          product={products.find(p => p.id === item.id) as Product}
          quantity={item.quantity}
          dispatch={dispatch}
        />
      ))}
      <button className="m-auto w-52 rounded-md bg-[rgb(241,39,97)] p-3 px-5 font-semibold hover:opacity-90">
        Proceed to Buy
      </button>
    </div>
  );
}

function CartItem({
  product,
  quantity,
  dispatch,
}: {
  product: Product;
  quantity: number;
  dispatch: React.Dispatch<Action>;
}) {
  const { id, image, item_name, price } = product;
  function handleDecQuantity() {
    dispatch({ type: "dec_item", id });
  }
  function handleIncQuantity() {
    dispatch({ type: "inc_item", id });
  }
  return (
    <div
      key={id}
      className="flex items-center justify-between gap-5 rounded-xl border-2 bg-slate-200 p-3 font-semibold"
    >
      <img src={image} className="h-28 w-28 rounded-full" alt="Image" />
      <p className="mx-auto w-52 leading-4">
        {item_name} <br />
        <span className="text-xs font-normal text-gray-500">
          Eligible for FREE Shipping
        </span>
      </p>
      <Quantity
        quantity={quantity}
        onInc={handleIncQuantity}
        onDec={handleDecQuantity}
      />

      <p className="w-20 p-1 text-xl font-bold">
        <sup className="text-sm">&#8377;</sup>
        {price * quantity}
        <sup className="text-sm">00</sup>
      </p>
    </div>
  );
}

function Offers({
  setToggle,
  toggle,
}: {
  setToggle: (toggle: boolean) => void;
  toggle: boolean;
}) {
  return (
    <div className="my-4 rounded-md border-2 p-5">
      <h4 className="text-md flex items-center font-semibold">
        <i className="bi bi-patch-check-fill pr-2 text-xl"></i>
        Available Offers
      </h4>
      <div className="pt-4 text-[0.85rem] text-gray-800">
        <ul className="list-inside list-disc marker:text-gray-400">
          <li>5% Unlimited cashback on Flipkart Axis Bank Credit Card. TCA</li>
        </ul>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className={clsx(
            { hidden: toggle },
            "m-3 font-semibold text-[rgb(241,39,97)]"
          )}
        >
          Show More <i className="bi bi-chevron-down text-xs"></i>
        </button>
        <div className={clsx({ hidden: !toggle })}>
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
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="m-3 font-semibold text-[rgb(241,39,97)]"
          >
            Show less <i className="bi bi-chevron-up text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
