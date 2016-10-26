//Back-end Logic
function isLetter(character) {
  if (character.match(/[a-zA-Z]/g)) { //regex "if characters are such THEN..."
    return true;
  } else {
    return false;
  }
}

function isVowel(character) {
  if (character.match(/[aeiouAEIOU]/g)) { //regex "if characters are such THEN..."
    return true;
  } else {
    return false;
  }
}

function hasPunctuation(word) {
  return !isLetter(word[word.length-1]);
};

function withoutPunctuation(word) {
  return word.slice(0, word.length-1);
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

//Return word formatted to pig latin
function appendSuffix(word) {
  var punctuation = hasPunctuation(word);
  var justWord;
  var punctuationMark = "";
  var leadingNonLetter = "";

  //Check for punctuation
  if (punctuation) {
    if (word.length === 1) {
      return word;
    } else {
      punctuationMark = word[word.length-1];
      justWord = word.slice(0, word.length-1);
    }
  } else {
    justWord = word;
  };

  //Rules if word is only 1 character
  if (justWord.length === 1) {
    if (isLetter(justWord)) {
      return justWord + "ay" + punctuationMark;
    } else {
      return justWord + punctuationMark;
    };

  //Rules if word doesn't start with a letter
  } else if (!isLetter(justWord[0])) {
    leadingNonLetter = justWord[0];
    var moveLetters = justWord.slice(1, firstVowel(justWord));
    var newWord = justWord.slice(firstVowel(justWord), justWord.length);
    newWord += moveLetters;
    return leadingNonLetter + newWord + "ay" + punctuationMark;

  //Rules if word starts with a vowel
  } else if (isVowel(justWord[0])) {
    return justWord + "ay" + punctuationMark;

  //Rules if word starts with a consonant
  } else if (isLetter(justWord[0])) {
    var moveLetters = justWord.slice(0, firstVowel(justWord));
    var newWord = justWord.slice(firstVowel(justWord), justWord.length);
    newWord += moveLetters;
    return newWord + "ay" + punctuationMark;
  };
};

//Convert user string into array of words
function arrayConversion(string){
  var sentenceArray = string.split(" "); // open bracket is a split on space
  var latinArray = sentenceArray.map(function(word){
    return appendSuffix(word);
  })
  return latinArray.join(" ");
}

//User Interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("#output").text(arrayConversion($("#input").val()));
  });
});
