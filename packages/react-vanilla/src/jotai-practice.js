"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.JotaiPract = void 0;
var jotai_1 = require("jotai");
var react_1 = require("react");
var userIdAtom = (0, jotai_1.atom)(1);
var userAtom = (0, jotai_1.atom)(function (get, _a) {
    var signal = _a.signal;
    return __awaiter(void 0, void 0, void 0, function () {
        var userId, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = get(userIdAtom);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users/".concat(userId, "?_delay=2000"), { signal: signal })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
});
var Controls = function () {
    var _a = (0, jotai_1.useAtom)(userIdAtom), userId = _a[0], setUserId = _a[1];
    return (<div className="items center flex justify-center text-2xl font-semibold">
      User Id: {userId}
      <button className="mx-5 rounded-md bg-gray-300 p-3" onClick={function () {
            setUserId(function (c) { return c - 1; });
        }}>
        Prev
      </button>
      <button className="rounded-md bg-gray-300 p-3 " onClick={function () {
            setUserId(function (c) { return c + 1; });
        }}>
        Next
      </button>
    </div>);
};
var UserName = function () {
    var user = (0, jotai_1.useAtom)(userAtom)[0];
    return (<div className="flex justify-center text-2xl font-semibold">
      User name: {user.name}
    </div>);
};
var JotaiPract = function () { return (<>
    <Controls />
    <react_1.Suspense fallback="Loading...">
      <UserName />
    </react_1.Suspense>
  </>); };
exports.JotaiPract = JotaiPract;
