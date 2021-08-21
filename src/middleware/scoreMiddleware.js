const scoreCalculator = require("../services/scoreCalculator");

const scoreMiddleware = (req, res, next) => {
  if (req.body.word) {
    req.score = scoreCalculator(req.body.word);
    req.app.locals.scoreBoard.updateScores(req.body.name, req.score);
    next();
  } else {
    req.score = 0;
    next();
  }
};

module.exports = scoreMiddleware;
