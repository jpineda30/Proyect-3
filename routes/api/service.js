var db = require("../../models");
var passport = require("../../config/passport.js");
const { Service } = require("../../controllers/index");
const router = require("express").Router();

router.route("/").get(function (req, res) {
  if (!req.user) {
    res.status(404).json({});
  } else {
    console.log("logged");

    Service.findServiceById({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
});

router.route("/create");
router.route("/update").post(Service.update);

router.route("/delete").post(Service.delete);

router.route("/create").post(Service.create);

module.exports = router;
