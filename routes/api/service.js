var db = require("../../models");
var passport = require("../../config/passport.js");
const {Service} = require("../../controllers/index");
//const ScheduleC = require("../../controllers")
//console.log(ScheduleC);
const router = require("express").Router();

router.route("/")
.get(
    function(req, res) {
        console.log("checking");
    if (!req.user) {

      // The user is not logged in, send back an empty object
      res.status(404).json({});
    } else {      
      console.log("logged");
      //Findall
     Service.findServiceById({})      
       .then(dbModel => res.json(dbModel))
      .catch(err=> res.status(422).json(err));
    }
  });

  router.route("/update")
  .post(
        Service.update
  )

  router.route("/create")
  .post(
      //Podriamos revisar si el usuario esta loggeado para crear el servicio.
      Service.create
  )

  module.exports = router;
