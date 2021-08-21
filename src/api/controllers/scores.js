exports.getScores = (req, res, next) => {
  return res.status(200).json(req.app.locals.scoreBoard.getScores());
};
