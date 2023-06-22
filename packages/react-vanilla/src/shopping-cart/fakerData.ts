import { faker } from "@faker-js/faker";
import { map, pipe, range, toArray } from "@ti/core";
faker.seed(99);

export type Product = {
  id: number;
  item_name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
};

export const fakeProducts: Product[] = pipe(
  range(20),
  map(() => ({
    id: faker.number.int(),
    item_name: faker.commerce.productName(),
    image: faker.image.url(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
  })),
  toArray
);
