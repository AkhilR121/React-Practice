"use strict";
exports.__esModule = true;
exports.accountAtom = exports.addressAtom = exports.userAtom = exports.initialAccount = exports.initialAddress = exports.initialUser = void 0;
var jotai_1 = require("jotai");
var zod_1 = require("zod");
var userProps = zod_1.z.object({
    firstName: zod_1.z.string().min(3),
    lastName: zod_1.z.string().min(3),
    age: zod_1.z.string()
});
var userLocation = zod_1.z.object({
    street: zod_1.z.string(),
    city: zod_1.z.string(),
    state: zod_1.z.string(),
    zip: zod_1.z.string().length(6).max(6)
});
var userAccount = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).max(12)
});
exports.initialUser = {
    firstName: "",
    lastName: "",
    age: ""
};
exports.initialAddress = {
    street: "",
    city: "",
    state: "",
    zip: ""
};
exports.initialAccount = {
    email: "",
    password: ""
};
exports.userAtom = (0, jotai_1.atom)(exports.initialUser);
exports.addressAtom = (0, jotai_1.atom)(exports.initialAddress);
exports.accountAtom = (0, jotai_1.atom)(exports.initialAccount);
