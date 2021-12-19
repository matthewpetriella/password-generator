// Assignment code here

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

function generatePassword () {
  var charNum = window.prompt ('How many characters would you like your password to contain? Min: 8, Max: 128');

  if (charNum === "" || charNum === null) {
    window.alert("Please provide a number between 8 and 128.");
  } else if (charNum < 8 || charNum >128) {
    window.alert("Please enter a number between 8 and 128.");
  } else {
    confirmNum = window,confirm("Would you like your password to contain NUMBERS?");
    confirmLow = window.confirm("Would you like your password to contain LOWERCASE letters?");
    confirmUp = window.confirm("Would you like your password to contain UPPERCASE letters?");
    confirmChar = window.confirm("Would you like your password to contain SPECIAL CHARACTERS?");
  };

  if (!confirmNum && !confirmLow && !confirmUp && !confirmChar) {
    window.alert("Please select at least one criteria.")
  }

  


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