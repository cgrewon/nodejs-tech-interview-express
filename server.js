const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json({ extended: true }));

//* Please check ReadMe.md to get request formats.

function transformWords(words) {
  if (!Array.isArray(words) || words.length == 0) {
    console.log("Word array is empty.");
    return "";
  }

  return words
    .map((word, index) => {
      let newWord = word;
      if (newWord.length % 2 == 0 && newWord.length > 0) {
        // even length word
        newWord = newWord.split("").reverse().join("");
      }

      if ((index + 1) % 2 == 1) {
        // odd
        newWord = newWord
          .split("")
          .map((char, indexOfChar) => ((indexOfChar + 1) % 2 == 0 ? "*" : char))
          .join("");
      }
      return newWord;
    })
    .join(" ");
}

function validWords(words) {
  if (!words || words.length == 0) {
    return null;
  } else {
    const _words = Array.isArray(words) ? words : words.split(" ");
    return transformWords(_words);
  }
}

app.get("/", (req, res) => {
  res.send("Server listen on port " + port);
});

app.get("/test", (req, res) => {
  const words = validWords(req.query.words, res);
  if (words === null) {
    res.status(400).json({
      status: "failed",
      message: "Invalid request",
    });
  } else {
    res.json({
      status: "success",
      result: words,
    });
  }
});

app.post("/test", (req, res) => {
  const words = validWords(req.body.words, res);
  if (words === null) {
    res.status(400).json({
      status: "failed",
      message: "Invalid request",
    });
  } else {
    res.json({
      status: "success",
      result: words,
    });
  }
});

app.listen(port, () => {
  console.log(`Test server is running on ${port}. http://localhost:${port}`);
});
