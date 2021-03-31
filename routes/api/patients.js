var db = require("../../models");
var passport = require("../../config/passport.js");
const { Patient } = require("../../controllers/index");
//const ScheduleC = require("../../controllers")
//console.log(ScheduleC);
const router = require("express").Router();

router.route("/").get(function (req, res) {
  console.log("checking");
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.status(404).json({});
  } else {
    console.log("logged");
    //Findall
    Patient.findPatientById({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
});

router.route("/create");
router.route("/update").post(Patient.update);

router.route("/delete").post(Patient.delete);

router.route("/create").post(
  //Podriamos revisar si el usuario esta loggeado para crear el servicio.
  Patient.create
);

module.exports = router;
