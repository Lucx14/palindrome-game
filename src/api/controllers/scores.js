const dummyScores = [
  { name: "test", points: 10 },
  { name: "test", points: 22 },
  { name: "test", points: 44 },
];

exports.getScores = (req, res, next) => {
  return res.status(200).json(dummyScores);
};
