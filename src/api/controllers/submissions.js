const dummyScores = [];

// This is a service function
function isPalindrome(text) {
  const re = /[^A-Za-z0-9]/g;
  const lowerCleanText = text.toLowerCase().replace(re, "");
  const reversedText = lowerCleanText.split("").reverse().join("");
  return lowerCleanText === reversedText;
}

exports.submitEntry = (req, res, next) => {
  userName = req.body.name;
  userWord = req.body.word;

  if (isPalindrome(userWord)) {
    palindromeScore = userWord.length;
    const prevHighScore = dummyScores.find((entry) => entry.name === userName);
    if (prevHighScore) {
      if (palindromeScore > prevHighScore.points) {
        prevHighScore.points = palindromeScore;
      }
    } else {
      dummyScores.push({ name: userName, points: palindromeScore });
    }
    res.status(200).json({ points: palindromeScore });
  } else {
    return res.status(200).json({ points: 0 });
  }
};
