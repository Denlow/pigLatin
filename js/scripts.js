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
  var firstLetter;
  if (string.length === 1) {
    if (isLetter(string)) {
      return string + "ay";
    };
  } else if (isVowel(string[0])) {
    return string + "ay";
  } else if (isLetter(string[0])) {
    if (string.slice(0, 2).toLowerCase() === "qu") {
      firstLetter = string.slice(0, 2);
      var newWord = string.slice(2, string.length);
      newWord += firstLetter;
      return newWord + "ay";
    } else {
      firstLetter = string[0];
      var newWord = string.slice(1, string.length);
      newWord += firstLetter;
      return newWord + "ay";
    };
  };
};


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log(appendSuffix($("#input").val()));
  });
});
