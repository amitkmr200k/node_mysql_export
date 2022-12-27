const express = require("express");
const router = express.Router();

const TestController = require("../controllers/TestController");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/", async function (req, res) {
  res.status(201).json({
    message: "test home page",
    data: {},
  });
});

// // define the about route
router.get("/about", function (req, res) {
  res.send("About test");
});

router.get("/create", TestController.create);

module.exports = router;
