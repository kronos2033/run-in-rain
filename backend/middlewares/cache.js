const { REDIS_PORT } = require("../utils/consts");
const redis = require("redis");
const client = redis.createClient({
  host: "redis-server",
  port: REDIS_PORT,
});

module.exports.cache = (req, res, next) => {
  client.get("tempOpen", (err, data) => {
    if (err) throw err;
    if (data !== null) {
      const result = {
        temp: data,
        source: "OpenWeather.com",
      };
      res.send(result);
    } else {
      client.get("tempOpen", (err, data) => {
        if (err) throw err;
        if (data !== null) {
          const result = {
            temp: data,
            source: "MetaWeather.com",
          };
          res.send(result);
        } else {
          next();
        }
      });
    }
  });
};

//цепочка if else
