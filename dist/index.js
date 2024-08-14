import { serve } from "@hono/node-server";
import { Hono } from "hono";
function random() {
  return Math.random();
}
const app = new Hono();
app.get("/", (c) => {
  return c.text(random().toString());
});
const port = 3e3;
console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port
});
export {
  app as default
};
