"use strict";
exports.__esModule = true;
exports.ShoppingCartApp = void 0;
var react_1 = require("react");
var use_immer_1 = require("use-immer");
var cart_items_1 = require("./cart-items");
var fakerData_1 = require("./fakerData");
var navbar_1 = require("./navbar");
var shoppingItems_1 = require("./shoppingItems");
function ShoppingCartApp() {
    var products = (0, react_1.useState)(function () { return fakerData_1.fakeProducts; })[0];
    var _a = (0, use_immer_1.useImmerReducer)(reducer, []), cartState = _a[0], dispatch = _a[1];
    return (<>
      <div>
        <navbar_1.Navbar />
        <div className="flex">
          <shoppingItems_1.ShoppingItems items={products} dispatch={dispatch}/>
          <cart_items_1.CartItems products={products} state={cartState} dispatch={dispatch}/>
        </div>
      </div>
    </>);
}
exports.ShoppingCartApp = ShoppingCartApp;
function reducer(draft, action) {
    switch (action.type) {
        case "add_item": {
            if (!draft.find(function (ele) { return ele.id === action.id; })) {
                draft.push({ id: action.id, quantity: 1 });
            }
            break;
        }
        case "inc_item": {
            var item = draft.find(function (d) { return d.id === action.id; });
            if (item) {
                item.quantity++;
            }
            break;
        }
        case "dec_item": {
            var item = draft.find(function (d) { return d.id === action.id; });
            if (item) {
                if (item.quantity === 1) {
                    var index = draft.findIndex(function (ci) { return ci.id === action.id; });
                    draft.splice(index, index + 1);
                    break;
                }
                item.quantity--;
            }
            break;
        }
    }
}
