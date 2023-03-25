export const tap =
  (msg?: string) =>
  <T>(x: T): T => {
    // eslint-disable-next-line no-console
    console.log(`tap(${msg ?? ""}): ${x}`);
    return x;
  };
