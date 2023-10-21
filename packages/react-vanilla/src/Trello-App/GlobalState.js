"use strict";
exports.__esModule = true;
exports.cardTitle = void 0;
var jotai_1 = require("jotai");
var initialState = [
    {
        id: 1,
        title: "To Do",
        done: false
    },
];
exports.cardTitle = (0, jotai_1.atom)(initialState);
