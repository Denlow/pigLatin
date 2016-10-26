var vowelArray = ["a", "e", "i", "o", "u"];
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isLetter(character) {
  var valid = false;
  letterArray.forEach(function(letter) {
    if (character === letter) {
      valid = true;
    }
  });
  letterArray.forEach(function(letter) {
    if (character === letter.toUpperCase()) {
      valid = true;
    }
  })
  if (valid) {
    return true;
  } else {
    return false;
  }
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log(isLetter($("#input").val()[0]));
  });
});
