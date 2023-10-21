"use strict";
exports.__esModule = true;
exports.taskReducer = void 0;
var nextId = 3;
var taskReducer = function (draft, action) {
    switch (action.type) {
        case "add-task": {
            if (action.text) {
                draft.push({
                    id: (nextId += 1),
                    text: action.text,
                    done: false
                });
            }
            break;
        }
        case "edit-task": {
            var index = draft.findIndex(function (t) { return t.id === action.text.id; });
            draft[index] = action.text;
            break;
        }
        case "delete-task": {
            var index = draft.findIndex(function (t) { return t.id === action.id; });
            draft.splice(index, 1);
            break;
        }
        default:
            break;
    }
};
exports.taskReducer = taskReducer;
