const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In another middleWare!");
  res.send("<h1>Hellw Express</h1>");
});

module.exports = router;
