"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TrelloApp = void 0;
var jotai_1 = require("jotai");
var use_immer_1 = require("use-immer");
var GlobalState_1 = require("./GlobalState");
var Navbar_1 = require("./Navbar");
var SideNavbar_1 = require("./SideNavbar");
var TodoSpace_1 = require("./TodoSpace");
function TrelloApp() {
    var initialAtom = (0, jotai_1.useAtomValue)(GlobalState_1.cardTitle);
    var _a = (0, use_immer_1.useImmerReducer)(reducer, initialAtom), state = _a[0], dispatch = _a[1];
    return (<div className="flex h-screen flex-col bg-slate-800">
      <div className="border-b-2 border-gray-600">
        <Navbar_1.NavBar />
      </div>
      <div className="flex h-[92vh] grow bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1440x1920/15b477c9abd496ff4cd464f94edc15bf/photo-1685519825719-e3c7abb18b81.jpg')] bg-cover bg-center bg-no-repeat">
        <SideNavbar_1.SideNavbar />
        <div className="scrollbar-hide w-[90%] overflow-x-scroll">
          <TodoSpace_1.TodoCard state={state} dispatch={dispatch}/>
        </div>
      </div>
    </div>);
}
exports.TrelloApp = TrelloApp;
var nextId = 1;
function reducer(draft, action) {
    switch (action.type) {
        case "list-title": {
            if (action.title) {
                draft.push({
                    id: (nextId += 1),
                    title: action.title,
                    done: false
                });
                action.setInitialAtom(__assign({}, draft));
            }
        }
    }
}
