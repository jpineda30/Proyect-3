//var db = require("../../models");
var passport = require("../../config/passport.js");
const { Schedule } = require("../../controllers/index");
//const ScheduleC = require("../../controllers")
//console.log(ScheduleC);
const router = require("express").Router();

router.route("/day").post(function (req, res) {
  console.log("Testing this bitch", req.body.day);

  if (!req.user) {
    res.status(404).json({ message: "Not Logged in" });
  } else {
    //console.log(req.body);
    Schedule.findAppointmentByDay(req.body.day)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
  // });
});

router.route("/month").get(function (req, res) {
  if (!req.user) {
    res.status(404).json({});
  }
});

router.route("/all").get(Schedule.findAllAppointment);

router.route("/create").post(
  //Podriamos revisar si el usuario esta loggeado para crear el servicio.
  Schedule.create
);

module.exports = router;
