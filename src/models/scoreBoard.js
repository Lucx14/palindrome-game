"use strict";

class ScoreBoard {
  constructor(scores = []) {
    this._scores = scores;
  }

  getScores() {
    const topFive = this._scores
      .sort((a, b) => (a.points < b.points ? 1 : -1))
      .slice(0, 5);
    return topFive;
  }

  updateScores(player, points) {
    const currentScore = this._getPlayerScore(player);
    if (currentScore) {
      if (points > currentScore.points) currentScore.points = points;
    } else {
      this._scores.push({ name: player, points: points });
    }
  }

  _getPlayerScore(player) {
    return this._scores.find((recordedScore) => recordedScore.name === player);
  }
}

module.exports = ScoreBoard;
