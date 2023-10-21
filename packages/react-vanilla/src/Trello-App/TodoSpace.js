"use strict";
exports.__esModule = true;
exports.AddTitleCard = exports.AddCard = exports.TodoCard = void 0;
var jotai_1 = require("jotai");
var react_1 = require("react");
var use_immer_1 = require("use-immer");
var GlobalState_1 = require("./GlobalState");
var TrelloIcons_1 = require("./TrelloIcons");
function TodoCard(_a) {
    var state = _a.state, dispatch = _a.dispatch;
    var setInitialAtom = (0, jotai_1.useSetAtom)(GlobalState_1.cardTitle);
    return (<div className="flex">
      {/* <div className="navbar">Navbar</div> */}
      <div className="flex">
        {state.map(function (card) {
            return (<div className="m-3 flex w-64 flex-col rounded-2xl bg-[#101204] p-2 font-semibold text-[#85919D]" key={card.title} draggable>
              <header className="flex justify-between px-1">
                <h1 className="">{card.title}</h1>
                <button className="rounded-md p-2 hover:bg-gray-700">
                  <TrelloIcons_1.OptionIcon />
                </button>
              </header>

              <main className="m-1 my-2 flex rounded-md bg-gray-700 p-2 text-sm">
                First Todo
              </main>

              <footer>
                <div className="flex justify-between px-2">
                  <button className="flex items-center gap-2 p-1">
                    <TrelloIcons_1.AddIcon />
                    <h4>Add a card</h4>
                  </button>
                </div>
              </footer>
            </div>);
        })}
      </div>
      <div className="p-5">
        <AddCard setInitialAtom={setInitialAtom} dispatch={dispatch}/>
      </div>
    </div>);
}
exports.TodoCard = TodoCard;
function AddCard(_a) {
    var setInitialAtom = _a.setInitialAtom, dispatch = _a.dispatch;
    var _b = (0, react_1.useState)(true), isEditing = _b[0], setIsEditing = _b[1];
    return (<div>
      {isEditing ? (<div onClick={function () {
                setIsEditing(!isEditing);
            }} className="flex w-64 cursor-pointer flex-row items-center rounded-xl bg-white bg-opacity-40 p-2 text-white hover:bg-opacity-25">
          <span className="text-2xl">+</span>
          <p>Add another list</p>
        </div>) : (<AddTitleCard dispatch={dispatch} setIsEditing={setIsEditing} isEditing={isEditing} setInitialAtom={setInitialAtom}/>)}
    </div>);
}
exports.AddCard = AddCard;
function AddTitleCard(_a) {
    var dispatch = _a.dispatch, setIsEditing = _a.setIsEditing, isEditing = _a.isEditing, setInitialAtom = _a.setInitialAtom;
    var _b = (0, use_immer_1.useImmer)(""), title = _b[0], setTitle = _b[1];
    return (<div className="w-64 rounded-xl bg-black bg-opacity-40 p-3 hover:bg-opacity-25">
      <input type="text" placeholder="Enter list title..." name="title" value={title} className="w-full rounded-md border-2 border-[#85B8FF] p-1 outline-none" onChange={function (e) {
            setTitle(e.target.value);
        }}/>

      <div className="flex items-center">
        <button onClick={function () {
            dispatch({
                type: "list-title",
                title: title,
                setInitialAtom: setInitialAtom
            });
            setTitle("");
        }} className="mt-3 rounded-md bg-[#85B8FF] p-2 px-3 text-black">
          Add list
        </button>

        <button className="pl-4 pt-3 text-[#85919D]" onClick={function () {
            setIsEditing(!isEditing);
        }}>
          <TrelloIcons_1.CancelIcon />
        </button>
      </div>
    </div>);
}
exports.AddTitleCard = AddTitleCard;
