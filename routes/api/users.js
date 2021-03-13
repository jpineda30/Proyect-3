// Requiring our models and passport as we've configured it
// var db = require("../../models");
var passport = require("../../config/passport.js");
const {User} = require("../../controllers/index");

const router = require("express").Router();

  //Should match "/api/users/..."
  router.route("/signup")
  .post(User.create)
  // .then(function() {
  //   res.redirect(307, "/api/login");
  // }).catch(function(err) {
  //   console.log(err);
  //   res.status(401).json({message: "There was an error, check the error"});
  // });



  router.route("/login")
  .post(passport.authenticate("local"), function(req, res) {
      res.status(202).json({_id:req.user._id, username:req.user.username, email:req.user.email});
    });


  // router.route("/")
  // .get(userController.findAll);
  // Route for logging user out
  router.route("/logout").get(function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side


router.route("/user_data")
.get(
  function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  }
);



   
  // // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // // otherwise send back an error
  // app.post("/api/signup", function(req, res) {
  //   db.User.create({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/api/login");
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //       res.status(401).json({message: "There was an error, check the error"});
  //     });
  // });
module.exports = router;

