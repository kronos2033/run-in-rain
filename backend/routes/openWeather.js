const router = require("express").Router();
const { REDIS_PORT } = require("../utils/consts");

const { getWeatherByOpen } = require("../controllers/openWeather");
router.get("/", getWeatherByOpen);

module.exports = router;
