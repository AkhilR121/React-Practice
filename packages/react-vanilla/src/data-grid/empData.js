"use strict";
exports.__esModule = true;
exports.empList = void 0;
var faker_1 = require("@faker-js/faker");
var core_1 = require("@ti/core");
faker_1.faker.seed(99);
exports.empList = (0, core_1.pipe)((0, core_1.range)(100), (0, core_1.map)(function () { return ({
    id: faker_1.faker.number.int({ min: 1000, max: 10000 }),
    full_name: faker_1.faker.person.fullName(),
    company: faker_1.faker.company.name(),
    location: faker_1.faker.location.country(),
    salary: Number(faker_1.faker.number.int({ min: 15000, max: 5000000 })),
    rating: faker_1.faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    pageNumber: 1
}); }), core_1.toArray);
