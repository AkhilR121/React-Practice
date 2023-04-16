import { rest } from "msw";

export const handlers = [
  rest.get("/hello", (_, res, ctx) => {
    return res(ctx.delay(2000), ctx.json({ message: "Hello, world!" }));
  }),
];
