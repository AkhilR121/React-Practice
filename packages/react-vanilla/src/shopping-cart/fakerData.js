"use strict";
exports.__esModule = true;
exports.fakeProducts = void 0;
var faker_1 = require("@faker-js/faker");
var core_1 = require("@ti/core");
faker_1.faker.seed(99);
exports.fakeProducts = (0, core_1.pipe)((0, core_1.range)(20), (0, core_1.map)(function () { return ({
    id: faker_1.faker.number.int(),
    item_name: faker_1.faker.commerce.productName(),
    image: faker_1.faker.image.url(),
    price: Number(faker_1.faker.commerce.price()),
    description: faker_1.faker.commerce.productDescription(),
    rating: faker_1.faker.number.float({ min: 1, max: 5, precision: 0.1 })
}); }), core_1.toArray);
