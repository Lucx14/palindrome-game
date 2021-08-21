"use strict";

class ScoreBoard {
  constructor(scores = []) {
    this.scores = scores;
  }

  getScores() {
    // filter for zero??
    return this.scores;
  }

  updateScoreBoard(player, points) {
    // lowercase the player names for the check then capitalize for the recording
    const prev = this.getPlayerScore(player);
    if (prev) {
      if (points > prev.points) {
        // ?????
        prev.points = points;
      }
    } else {
      this.scores.push({ name: player, points: points });
    }
    return this.getPlayerScore(player);
  }

  getPlayerScore(player) {
    // returns undefined if nothing is found
    return this.scores.find((recordedScore) => recordedScore.name === player);
  }
}

module.exports = ScoreBoard;
