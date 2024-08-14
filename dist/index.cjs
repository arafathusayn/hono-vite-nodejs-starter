(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("@hono/node-server"), require("hono")) : typeof define === "function" && define.amd ? define(["@hono/node-server", "hono"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Index = factory(global.nodeServer, global.hono));
})(this, function(nodeServer, hono) {
  "use strict";
  function random() {
    return Math.random();
  }
  const app = new hono.Hono();
  app.get("/", (c) => {
    return c.text(random().toString());
  });
  const port = 3e3;
  console.log(`Server is running on port ${port}`);
  nodeServer.serve({
    fetch: app.fetch,
    port
  });
  return app;
});
