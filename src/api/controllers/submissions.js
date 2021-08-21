const scoreCalculator = require("../../services/scoreCalculator");

exports.submitEntry = (req, res, next) => {
  const score = scoreCalculator(req.body.word);
  req.app.locals.scoreBoard.updateScoreBoard(req.body.name, score);
  return res.status(200).json({ points: score });
};
