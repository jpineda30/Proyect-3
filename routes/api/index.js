const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointment");
const serviceRoutes = require ("./service")
//UserRoutes

router.use("/users", userRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/service", serviceRoutes)

module.exports=router;