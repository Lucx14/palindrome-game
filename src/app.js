const scoresRoutes = require("./api/routes/scores");
const submissionsRoutes = require("./api/routes/submissions");
const gameRoutes = require("./routes/game");

// Config
const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.use(gameRoutes);
app.use(scoresRoutes);
app.use(submissionsRoutes);

// Expose app
app.listen(port, function () {
  console.log("Server", process.pid, "listening on port", port);
});
