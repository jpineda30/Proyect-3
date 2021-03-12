var db = require("../../models");
var passport = require("../../config/passport.js");
const {Schedule} = require("../../controllers/index");

const router = require("express").Router();

router.route("/")
.get(
    function(req, res) {
        console.log("checking");
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.status(404).json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      console.log(req.user);
      console.log("logged");
      console.log(Schedule);
      Schedule.findAll({id:req.user._id})
      .then(()=> res.status(202).json(res));
      //res.status(202).json(scheduleRes);
      //Maybe eventually add the id on the url?
      //res.redirect("/"+req.user._id)
    }
  });

  module.exports = router;