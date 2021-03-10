const router = require("express").Router();
const userRoutes = require("./users");

//UserRoutes

router.use("/users", userRoutes);

module.exports=router;