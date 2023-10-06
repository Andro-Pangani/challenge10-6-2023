let phrase =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers ";

const VOWELS = ["a", "e", "i", "o", "u"];

function findLongestWord(input) {
  if (!input && typeof input !== "string") {
    return null;
  }

  let words = input.split(" ").map((word) => {
    // Ignoring non-english charecters
    let validWord = word
      .split("")
      .filter((l) => isCharEng(l))
      .join("");
    return validWord;
  });

  // checking for length
  if (words.length) {
    // return immediately if there' only one word
    if (words.length === 1) return words[0];
    const longestWordsList = [];

    // in case there's more then one word
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
      let currWord = words[i];
      if (currWord.length > longestWord.length) {
        longestWord = currWord;
      } else if (currWord.length === longestWord.length) {
        longestWordsList.push(currWord);
      }
    }

    let wordListLength = longestWordsList.length;
    if (wordListLength) {
      return wordListLength > 1
        ? getWordByVowelsCount(longestWordsList)
        : longestWordsList[0];
    }

    return longestWord;
  }
}

function getVowelsCount(word) {
  let vowelsCounter = 0;
  word.split("").map((letter) => {
    if (VOWELS.includes(letter)) vowelsCounter++;
  });
  return vowelsCounter;
}

function getWordByVowelsCount(words) {
  let finalWord = words[0];
  let finalVowelsCount = getVowelsCount(finalWord);

  //starting from second
  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    let currVowelsCount = getVowelsCount(currentWord);
    if (currVowelsCount > finalVowelsCount) {
      finalWord = currentWord;
      finalVowelsCount = currVowelCount;
    }
  }

  return finalWord;
}

function isCharEng(char) {
  return /^[a-zA-Z]+$/i.test(char);
}

console.log(findLongestWord(phrase));
