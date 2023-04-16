import express from "express";

const app = express();

const hello = async () => "Hello World!";

app.get("/", async (_, res) => {
  const message = await hello();
  res.send(message);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
