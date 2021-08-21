const ScoreBoard = require("../../models/scoreBoard");

describe("model: ScoreBoard", () => {
  beforeEach(() => {
    card = new ScoreBoard();
  });

  test("fn: getScores initial value is empty array", () => {
    expect(card.getScores()).toEqual([]);
  });

  test("fn: getScores returns list of scores", () => {
    card.updateScores("test name", 10);
    card.updateScores("test name 2", 22);
    const expected = [
      { name: "test name", points: 10 },
      { name: "test name 2", points: 22 },
    ];
    expect(card.getScores()).toEqual(expected);
  });

  test("fn: updateScores adds player score to list if not present", () => {
    card.updateScores("test name", 10);
    const expected = [{ name: "test name", points: 10 }];
    expect(card.getScores()).toEqual(expected);
  });

  test("fn: updateScores leaves score unchanged if lower", () => {
    card.updateScores("test name", 10);
    card.updateScores("test name", 5);
    const expected = [{ name: "test name", points: 10 }];
    expect(card.getScores()).toEqual(expected);
  });

  test("fn: updateScores overwrites player score if higher", () => {
    card.updateScores("test name", 10);
    card.updateScores("test name", 5);
    card.updateScores("test name", 20);
    const expected = [{ name: "test name", points: 20 }];
    expect(card.getScores()).toEqual(expected);
  });
});
