const express = require("express");

const router = express.Router();

router.get("/app-product", (req, res, next) => {
  res.send(
    '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
