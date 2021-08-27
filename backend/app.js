const express = require("express");
const { PORT } = require("./utils/consts");
const { cache } = require("./middlewares/cache");
const loadbalance = require("loadbalance");
const cors = require("cors");
const engine = loadbalance.roundRobin([
  require("./routes/openWeather"),
  require("./routes/metaWeather"),
]);
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", cache, engine.pick());

app.listen(PORT, () => console.log("in work"));
