const router = require("express").Router();
const scheduleRoutes = require("./scheduleRoutes");

router.use("/schedule", scheduleRoutes);

module.exports = router;
