const express = require("express");
const path = require("path");
const routes = require("./controllers");

const request = require("request");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
// app.use(routes);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

app.get("/api/schedule", (req, res, next) => {
  request("https://api-web.nhle.com/v1/schedule/now/", function (error, response, body) {
    res.send(body);
  });
});

app.get("/api/schedule/:dateVal", (req, res, next) => {
  console.log(req);
  request(`https://api-web.nhle.com/v1/schedule/${req.params.dateVal}`, function (error, response, body) {
    res.send(body);
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
