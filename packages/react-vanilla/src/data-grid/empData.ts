import { faker } from "@faker-js/faker";
import { map, pipe, range, toArray } from "@ti/core";
faker.seed(99);

export type Employee = Readonly<{
  id: number;
  full_name: string;
  company: string;
  location: string;
  salary: number;
  rating: number;
  pageNumber: number;
}>;

export type DataGridState = {
  filtered: Employee[];
  original: Employee[];
};

export const empList: Employee[] = pipe(
  range(100),
  map(() => ({
    id: faker.number.int({ min: 1000, max: 10000 }),
    full_name: faker.person.fullName(),
    company: faker.company.name(),
    location: faker.location.country(),
    salary: Number(faker.number.int({ min: 15000, max: 5000000 })),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    pageNumber: 1,
  })),
  toArray
);
