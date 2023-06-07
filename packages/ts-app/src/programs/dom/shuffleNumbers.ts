import { map, pipe, range, toArray } from "@ti/core";

export function shuffle(): (string | undefined)[] {
  const array: (string | undefined)[] = pipe(
    range(1, 16),
    map(i => `${i}`),
    toArray
  ).concat("");

  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function shuffleNumbers(size: number): number[] {
  const numbers = pipe(range(0, size), toArray);
  let currentIndex = numbers.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [numbers[currentIndex], numbers[randomIndex]] = [
      numbers[randomIndex],
      numbers[currentIndex],
    ];
  }

  return numbers;
}
