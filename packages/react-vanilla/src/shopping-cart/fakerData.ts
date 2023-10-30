import { faker } from "@faker-js/faker";
import { map, pipe, range, toArray } from "@ti/core";
// import { map, pipe, range, toArray } from "@ti/core";

faker.seed(99);

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: number;
};
export type Rating = {
  count: number;
  rate: number;
};

export type ItemsList = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: Rating | number | any;
};
// export const fakeProducts: ItemsList[] = {
//   id: 1,
//   title,
// };
export const fakeProducts: ItemsList[] = pipe(
  range(20),
  map(() => ({
    id: faker.number.int(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    category: faker.commerce.productDescription(),
  })),
  toArray
);

export async function apiCall() {
  return await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(date => date);
}
