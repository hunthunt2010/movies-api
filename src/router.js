const Router = require("koa-router");

const { details, list } = require("./controllers/movies");

const router = new Router();

router.get("/movies", list);
router.get("/movies/:id", details);

module.exports = router;
