const scoreCalculator = require("../../services/scoreCalculator");

describe("func: scoreCalculator", () => {
  test("score for non palindrome is zero", () => {
    expect(scoreCalculator("not a palindrome")).toBe(0);
  });

  test("score for 'bob' = 3", () => {
    expect(scoreCalculator("bob")).toBe(3);
  });

  test("score for 'Able was I ere I saw Elba' is 19", () => {
    expect(scoreCalculator("Able was I ere I saw Elba")).toBe(19);
  });

  test("score for 'A man, a plan, a canal – Panama' is 21", () => {
    expect(scoreCalculator("A man, a plan, a canal – Panama")).toBe(21);
  });
});
