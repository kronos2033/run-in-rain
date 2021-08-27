const fetch = require("node-fetch");
const { REDIS_PORT } = require("../utils/consts");
const redis = require("redis");
const client = redis.createClient({
  host: "redis-server",
  port: REDIS_PORT,
});
const URL = "https://www.metaweather.com/api/location/2122265/";

module.exports.getWeatherByMeta = (req, res) => {
  fetch(URL)
    .then((res) => res.json())
    .then(({ consolidated_weather }) => {
      const temp = {
        temp: consolidated_weather[0].min_temp,
        source: "MetaWeather.com",
      };
      client.setex("tempMeta", 600, consolidated_weather[0].min_temp);
      res.send(temp);
    });
};
