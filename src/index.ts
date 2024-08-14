import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { random } from "./lib/utils";

const app = new Hono();

app.get("/", (c) => {
  return c.text(random().toString());
});

const port = 3000;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
