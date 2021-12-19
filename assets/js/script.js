var enter;
var confirmNum;
var confirmLow;
var confirmUp;
var confirmChar;

//Characters
number = [1,2,3,4,5,6,7,8,9,0];
lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
character = ["!","@","#","$","%","^","&","*","(",")","_","+","-","="];

//placeholder for user input
var userInput;

//start password generator
function generatePassword () {
  var charNum = window.prompt ('How many characters would you like your password to contain? Min: 8, Max: 128');

  //Validate correct character amount has been entered
  if (charNum === "" || charNum === null) {
    window.alert("Please provide a number between 8 and 128.");
  } else if (charNum < 8 || charNum >128) {
    window.alert("Please enter a number between 8 and 128.");
  } 
  
  //prompts user to set criteria for password
  else {
    confirmNum = window,confirm("Would you like your password to contain NUMBERS?");
    confirmLow = window.confirm("Would you like your password to contain LOWERCASE letters?");
    confirmUp = window.confirm("Would you like your password to contain UPPERCASE letters?");
    confirmChar = window.confirm("Would you like your password to contain SPECIAL CHARACTERS?");
  };


  //validation if nothing is selected
  if (!confirmNum && !confirmLow && !confirmUp && !confirmChar) {
    userInput = window.alert("Please select at least one criteria.")
  }

  //all four criteria selected
  else if (confirmNum && confirmLow && confirmUp && confirmChar) 
    userInput = character.concat(number, lower, upper);
  
  //three criteria selected
  else if (confirmChar && confirmNum && confirmUp) {
    userInput = character.concat(number, upper);
  }
  else if (confirmChar && confirmNum && confirmLow) {
    userInput = character.concat(number, alpha);
  }
  else if (confirmChar && confirmLow && confirmUp) {
    userInput = character.concat(alpha, alpha2);
  }
  else if (confirmNum && confirmLow && confirmUp) {
    userInput = number.concat(alpha, alpha2);
  }

  //two criteria selected
  else if (confirmChar && confirmNum) {
    choices = character.concat(number);

  } else if (confirmChar && confirmLow) {
    choices = character.concat(alpha);

  } else if (confirmChar && confirmUp) {
    choices = character.concat(alpha2);
  } else if (confirmLow && confirmNum) {
    choices = alpha.concat(number);

  } else if (confirmLow && confirmUp) {
    choices = alpha.concat(alpha2);

  } else if (confirmNum && confirmUp) {
    choices = number.concat(alpha2);
  }

  //one criteria selected
  else if (confirmChar) {
    choices = character;
  }
  else if (confirmNum) {
    choices = number;
  }
  else if (confirmLow) {
    choices = alpha;
  }
  else if (confirmUp) {
    userInput = upper;
  }

  var password = [];

  for (var i =0; i <userInput; i++) {
    var inputs = userInput[Math.floor(Math.random() * choices.length)];
    password.push(inputs);
  }

  var passJoin = password.join("");
  writePassword (passJoin);
  return passJoin;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);