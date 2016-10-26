var vowelArray = ["a", "e", "i", "o", "u"];



function getVowels(string){
  var vowelCount = 0;
  vowelArray.forEach(function(vowel){
    if (vowel === string[0]){
      vowelCount ++;

    }

  })
  return vowelCount;
}






$(document).ready(function(){

  $("form").submit(function(event){
    console.log(getVowels($("#input").val()));
    event.preventDefault();
  });


});
