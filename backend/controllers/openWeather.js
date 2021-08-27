const fetch = require("node-fetch");
const { REDIS_PORT } = require("../utils/consts");
const redis = require("redis");
const client = redis.createClient({
  host: "redis-server",
  port: REDIS_PORT,
});
const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=4c8353c91ed7f96ebc64690123a3758a";

const convertKelvinIntoCelsius = (temp) => {
  return temp - 273, 15;
};

module.exports.getWeatherByOpen = (req, res) => {
  fetch(URL)
    .then((res) => res.json())
    .then(({ main }) => {
      const temp = convertKelvinIntoCelsius(main.texmp);
      client.setex("tempOpen", 60, temp);
      const result = {
        temp,
        source: "OpenWeather",
      };
      res.send(result);
    })
    .catch((err) => console.log(err));
};
