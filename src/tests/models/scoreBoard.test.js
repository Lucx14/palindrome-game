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
      { name: "test name 2", points: 22 },
      { name: "test name", points: 10 },
    ];
    expect(card.getScores()).toEqual(expected);
  });

  test("fn: getScores returns the top 5 highest scores", () => {
    card.updateScores("test name 1", 10);
    card.updateScores("test name 2", 22);
    card.updateScores("test name 3", 30);
    card.updateScores("test name 4", 5);
    card.updateScores("test name 5", 15);
    card.updateScores("test name 6", 50);
    card.updateScores("test name 7", 33);
    card.updateScores("test name 8", 23);
    card.updateScores("test name 9", 19);

    const expected = [
      { name: "test name 6", points: 50 },
      { name: "test name 7", points: 33 },
      { name: "test name 3", points: 30 },
      { name: "test name 8", points: 23 },
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
