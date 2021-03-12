const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointment");

//UserRoutes

router.use("/users", userRoutes);
router.use("/appointment", appointmentRoutes);

module.exports=router;