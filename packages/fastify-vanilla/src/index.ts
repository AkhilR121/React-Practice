/* eslint-disable no-console */
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import fastify from "fastify";
import { ping } from "./routes";

export const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: "email" })),
});

export type UserType = Static<typeof User>;

const app = fastify({
  logger: { transport: { target: "pino-pretty" } },
}).withTypeProvider<TypeBoxTypeProvider>();

app.register(ping);

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
