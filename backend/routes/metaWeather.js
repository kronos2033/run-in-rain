const router = require("express").Router();

const { getWeatherByMeta } = require("../controllers/metaWeather");
router.get("/", getWeatherByMeta);

module.exports = router;
