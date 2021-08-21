const scoresRoutes = require("./api/routes/scores");
const submissionsRoutes = require("./api/routes/submissions");
const gameRoutes = require("./routes/game");
const ScoreBoard = require("./models/scoreBoard");
const scoreMiddleware = require("./middleware/scoreMiddleware");

// Config
const express = require("express");
const app = express();
const port = 3000;
app.locals.scoreBoard = new ScoreBoard();

// Middleware
app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.use(gameRoutes);
app.use(scoresRoutes);
app.use(scoreMiddleware);
app.use(submissionsRoutes);

// Expose app
app.listen(port, function () {
  console.log("Server", process.pid, "listening on port", port);
});
