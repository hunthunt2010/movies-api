const Koa = require("koa");

const router = require("./router");

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 8080;

console.log(`Starting server on port: ${port}`);
module.exports = process.env["NODE_ENV"] === "test" ? app : app.listen(port);
