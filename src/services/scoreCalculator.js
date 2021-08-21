const isPalindrome = require("../utils/palindrome");

const scoreCalculator = (text) => {
  if (isPalindrome(text)) {
    const re = /[^A-Za-z0-9]/g;
    return text.replace(re, "").length;
  } else {
    return 0;
  }
};

module.exports = scoreCalculator;
