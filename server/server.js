const express = require("express");
const request = require("request");
const app = express();

app.get("/api/schedule", (req, res, next) => {
  request("https://api-web.nhle.com/v1/schedule/now/", function (error, response, body) {
    res.send(body);
  });
});

app.get("/api/date/:dateVal", (req, res, next) => {
  console.log(req);
  request(`https://api-web.nhle.com/v1/schedule/${req.params.dateVal}`, function (error, response, body) {
    res.send(body);
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
