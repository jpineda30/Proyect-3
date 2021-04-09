var passport = require("../../config/passport.js");
const { User } = require("../../controllers/index");

const router = require("express").Router();

router.route("/signup").post(User.create);

router.route("/login").post(function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }

    req.login(user, (loginErr) => {
      if (loginErr) {
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

router.route("/logout").get(function (req, res) {
  req.logout();
  res.redirect("/");
});

router.route("/user_data").get(function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

module.exports = router;
