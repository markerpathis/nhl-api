const express = require("express");
const router = require("express").Router();
const request = require("request");
const app = express();

app.get("/", (req, res, next) => {
  request("https://api-web.nhle.com/v1/schedule/now/", function (error, response, body) {
    res.send(body);
  });
});

app.get("/:dateVal", (req, res, next) => {
  console.log(req);
  request(`https://api-web.nhle.com/v1/schedule/${req.params.dateVal}`, function (error, response, body) {
    res.send(body);
  });
});

module.exports = router;
