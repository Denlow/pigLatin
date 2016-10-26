var vowelArray = ["a", "e", "i", "o", "u"];
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isLetter(character) {
  var valid = false;
  letterArray.forEach(function(letter) {
    if (character.toLowerCase() === letter) {
      valid = true;
    }
  });
  if (valid) {
    return true;
  } else {
    return false;
  }
}

function firstVowel(word) {
  var wordArray = word.split("");
  var indexCounter = 0;
  var indexFound = false;
  wordArray.forEach(function(letter){
    if (isVowel(letter) && !indexFound){
      indexFound = true;
    } else if (isLetter(letter) && !indexFound) {
      if (letter.toLowerCase() === "q" && word[indexCounter+1] === "u") {
        if (isVowel(word[indexCounter+2])) {
          indexCounter += 2;
          indexFound = true;
        } else {
          indexCounter += 2;
        };
      } else if (!indexFound) {
        indexCounter++;
      }
    }
    else if (!indexFound) {
      indexCounter++;
    }
  });
  return indexCounter;
}

function isVowel(character) {
  var valid = false;
  vowelArray.forEach(function(vowel) {
    if (character === vowel) {
      valid = true;
    }
  });
  vowelArray.forEach(function(vowel) {
    if (character === vowel.toUpperCase()) {
      valid = true;
    }
  })
  if (valid) {
    return true;
  } else {
    return false;
  }
}

function appendSuffix(string) {
  if (string.length === 1) {
    if (isLetter(string)) {
      return string + "ay";
    };
  } else if (isVowel(string[0])) {
    return string + "ay";
  } else if (isLetter(string[0])) {
    console.log(firstVowel(string));
    var moveLetters = string.slice(0, firstVowel(string));
    console.log(firstVowel(string));
    var newWord = string.slice(firstVowel(string), string.length);
    newWord += moveLetters;
    return newWord + "ay";
  };
};
function arrayConversion(string){
  var sentenceArray = string.split(" "); // open bracket is a split on space
  var latinArray = sentenceArray.map(function(word){
    return appendSuffix(word);
  })
  var latinSentence = latinArray.join(" ");
  return latinSentence;
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log(arrayConversion($("#input").val()));
  });
});
