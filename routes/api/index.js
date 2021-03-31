const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointment");
const serviceRoutes = require("./service");
const patientRoutes = require("./patients");
const { route } = require("./users");

//UserRoutes

router.use("/users", userRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/service", serviceRoutes);
router.use("/patient", patientRoutes);

module.exports = router;
