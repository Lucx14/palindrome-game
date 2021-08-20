var express = require("express");

var app = express();

app.use(express.static(__dirname));

// example data structure to be returned for the scores:
const dummyScores = [];

// Body parser
app.use(express.json());

// This is a service function
function isPalindrome(text) {
  const re = /[^A-Za-z0-9]/g;
  const lowerCleanText = text.toLowerCase().replace(re, "");
  const reversedText = lowerCleanText.split("").reverse().join("");
  return lowerCleanText === reversedText;
}

// Home page
app.get("/", function (req, res) {
  res.render("index.html");
});

// returns the scores to the client
app.get("/api/getScores", function (req, res) {
  return res.status(200).json(dummyScores);
});

// handle the players submission
app.post("/api/submitEntry", function (req, res) {
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
});

var port = 3000;
app.listen(port, function () {
  console.log("Server", process.pid, "listening on port", port);
});
