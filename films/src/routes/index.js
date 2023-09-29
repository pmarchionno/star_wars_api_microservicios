const { Router } = require("express");
const controllers = require("../controllers");
const middlewars = require("../middlewares");

const { route } = require("../server");
const router = Router();

//router.get("/", (req, res) => {
router.get("/", controllers.getFilms);

router.post("/", middlewars.filmValidation, controllers.createFilms)

module.exports = router;
