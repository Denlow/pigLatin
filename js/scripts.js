var vowelArray = ["a", "e", "i", "o", "u"];
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isLetter(character) {
  var valid = false;
  letterArray.forEach(function(letter) {
    if (character === letter) {
      valid = true;
    } else if (character === letter.toUpperCase()) {
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
    } else if (!indexFound) {
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
    } else if (character === vowel.toUpperCase()) {
      valid = true;
    }
  });
  if (valid) {
    return true;
  } else {
    return false;
  }
}

function appendSuffix(word) {
  var punctuation = hasPunctuation(word);
  var justWord;
  var punctuationMark = "";
  var leadingNonLetter = "";
  if (punctuation) {
    if (word.length === 1) {
      return word;
    } else {
      punctuationMark = word[word.length-1];
      justWord = word.slice(0, word.length-1);
    }
  } else {
    justWord = word;
  }
  if (justWord.length === 1) {
    if (isLetter(justWord)) {
      return justWord + "ay" + punctuationMark;
    } else {
      return justWord + punctuationMark;
    };
  } else if (!isLetter(justWord[0])) {
    leadingNonLetter = justWord[0];
    var moveLetters = justWord.slice(1, firstVowel(justWord));
    var newWord = justWord.slice(firstVowel(justWord), justWord.length);
    newWord += moveLetters;
    return leadingNonLetter + newWord + "ay" + punctuationMark;
  } else if (isVowel(justWord[0])) {
    return justWord + "ay" + punctuationMark;
  } else if (isLetter(justWord[0])) {
    var moveLetters = justWord.slice(0, firstVowel(justWord));
    var newWord = justWord.slice(firstVowel(justWord), justWord.length);
    newWord += moveLetters;
    return newWord + "ay" + punctuationMark;
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

function hasPunctuation(word) {
  return !isLetter(word[word.length-1]);
};

function withoutPunctuation(word) {
  return word.slice(0, word.length-1);
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("#output").text(arrayConversion($("#input").val()));
  });
});
