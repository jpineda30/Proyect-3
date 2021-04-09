const router = require("express").Router();
const apiR = require("./api");

router.use("/api", apiR);

router.use(function (req, res) {
  res.json("Mala ruta..");
});

module.exports = router;
