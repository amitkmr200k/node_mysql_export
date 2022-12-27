const express = require("express");
const router = express.Router();

const TestRoutes = require("./TestRoutes");

router.use("/test", TestRoutes);

module.exports = router;
