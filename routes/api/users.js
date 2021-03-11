// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("../../config/passport.js");
const userController = require("../../controllers/userController");

const router = require("express").Router();

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  
  //   res.json(req.user);
  // });
  //Should match "/api/users/..."
  router.route("/signup")
  .post(userController.create);

  router.route("/login")
  .post(passport.authenticate("local"), function(req, res) {
      res.json(req.user);
    });



//   {
//    "username":"test2",
//    "password":"1",
//    "email":"mail@mail.com",
//    "date": "1615348701859"
// }


  router.route("/")
  .get(userController.findAll);

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

  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

   
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

