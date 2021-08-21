const isPalindrome = require("../../utils/palindrome");

describe("func: isPalindrome", () => {
  test("determines 'abc' is not a palindrome", () => {
    expect(isPalindrome("abc")).toBeFalsy();
  });

  test("determines 'bob' is a palindrome", () => {
    expect(isPalindrome("bob")).toBeTruthy();
  });

  test("determines 'Able was I ere I saw Elba' is a palindrome", () => {
    expect(isPalindrome("Able was I ere I saw Elba")).toBeTruthy();
  });

  test("determines 'test input' is not a palindrome", () => {
    expect(isPalindrome("test input")).toBeFalsy();
  });

  test("determines 'a man a plan a canal panama' is a palindrome", () => {
    expect(isPalindrome("a man a plan a canal panama")).toBeTruthy();
  });

  test("treats whitespace as irrelevant", () => {
    expect(isPalindrome("    bob  ")).toBeTruthy();
  });

  test("is case insensitive", () => {
    expect(isPalindrome("Bob")).toBeTruthy();
  });

  test("ignores non alphanumerics", () => {
    expect(isPalindrome("b---%%%$o!!!--    b")).toBeTruthy();
  });
});
