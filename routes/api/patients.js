var db = require("../../models");
var passport = require("../../config/passport.js");
const { Patient } = require("../../controllers/index");
const router = require("express").Router();

router.route("/").get(function (req, res) {
  if (!req.user) {
    res.status(404).json({});
  } else {
    Patient.findPatientById({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
});

router.route("/create");
router.route("/update").post(Patient.update);

router.route("/delete").post(Patient.delete);

router.route("/create").post(Patient.create);

module.exports = router;
