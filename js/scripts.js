
var checkLetter = function(input){
  if (input !== " " && input !== "," && input !== "." && input !== "!") {
    return true;
  } else {
    return false;
  }
};
function boxCode (input) {
  var results = '';
  var inputArray = [];
  var boxArray = [];

  inputArray = input.split("");
  inputArray = inputArray.filter(checkLetter)

  var rows = Math.ceil(Math.sqrt(inputArray.length));

  for (var i = 0; i < inputArray.length; i = 0) {
    boxArray.push(inputArray.splice(i, rows));
  }

  for (var x = 0; x < rows; x++) {
    for (i=0; i < rows; i++) {
      if (boxArray[i][x] !== undefined){
      results = results + boxArray[i][x];
     }
    }
  }
  return results;
};

var userInput = "This is a test sentence, if I could spell it correctly!"
console.log(boxCode(userInput));
