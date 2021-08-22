exports.submitEntry = (req, res, next) => {
  return res.status(200).json({ points: req.score });
};
