const isPalindrome = (text) => {
  const re = /[^A-Za-z0-9]/g;
  const lowerCleanText = text.toLowerCase().replace(re, "");
  const reversedText = lowerCleanText.split("").reverse().join("");
  return lowerCleanText === reversedText;
};

module.exports = isPalindrome;
