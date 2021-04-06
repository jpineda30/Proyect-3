// Requiring our models and passport as we've configured it
// var db = require("../../models");
var passport = require("../../config/passport.js");
const { User } = require("../../controllers/index");

const router = require("express").Router();

//Should match "/api/users/..."
router.route("/signup").post(User.create);
// .then(function() {
//   res.redirect(307, "/api/login");
// }).catch(function(err) {
//   console.log(err);
//   res.status(401).json({message: "There was an error, check the error"});
// });

/*   router.route("/login")
  .post(passport.authenticate("local"), function(req, res) {
      res.status(202).json({_id:req.user._id, username:req.user.username, email:req.user.email});
    }); */

router.route("/login").post(function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status

    /*   if (!user) {
      return res.send({ success: false, message: "authentication failed" });
    } */

    // **
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // **

    req.login(user, (loginErr) => {
      if (loginErr) {
        //return next(loginErr);
        return res.send({ success: false, message: "authentication failed" });
      }
    });

    if (user) {
      return res.send({
        success: true,
        _id: user._id,
        message: "authentication succeeded",
      });
    }
  })(req, res, next);
});

router.route("/login/isLogged").post(function (req, res) {
  if (req.user) {
    res.status(202).json({ _id: req.user._id, isLogged: true });
  } else {
    res.status(202).json({ _id: null, isLogged: false });
  }
});

// router.route("/")
// .get(userController.findAll);
// Route for logging user out
router.route("/logout").get(function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side

router.route("/user_data").get(function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

module.exports = router;
