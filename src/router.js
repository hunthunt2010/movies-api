const Router = require("koa-router");

const { details, list } = require("./controllers/movies");
const { validateParams } = require("./helpers/utils");

const router = new Router();

router.get("/movies", validateParams, list);
router.get("/movies/:id", details);

module.exports = router;
