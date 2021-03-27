var db = require("../../models");
var passport = require("../../config/passport.js");
const { Service } = require("../../controllers/index");
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
    Service.findServiceById({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
});

router.route("/update").post(function (req, res) {
  if (!req.user) {
    res.status(404).json({});
  } else {
    Service.update(
      { _id: req.body._id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          details: req.body.details,
        },
      },
      {
        upsert: false,
      }
    );
    // .then(dbModel => res.json(dbModel))
    // .catch(err=> res.status(422).json(err));
  }
});

/*   router.route("/create")
router.route("/update").post(Service.update);

router.route("/create").post(
  //Podriamos revisar si el usuario esta loggeado para crear el servicio.
  Service.create
);
/* router.route("/create")
  .post(
      //Podriamos revisar si el usuario esta loggeado para crear el servicio.
      Service.create
  ).then(dbRes => res.json(dbRes)) */

module.exports = router;
