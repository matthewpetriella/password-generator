//Assignment Code

//Function Variables
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", ",", ".", "?", "<", ">"];

var confirmLength = "";
var confirmNum;
var confirmLower;
var confirmUpper;
var confirmCharacter;

// Inital prompt, will set the length of the password
function generatePassword() {
  var confirmLength = (window.prompt("How many characters would you like your password to contain? Min:8 Max:128"));

  // alidation of password length
  while(confirmLength <= 7 || confirmLength >= 129) {
      window.alert("Please enter a value between 8 and 128.");
      var confirmLength = (window.prompt("How many characters would you like your password to contain? Min:8 Max:128"));
      } 

      // confirmation of password length
      // Source for next line of code
      //Stack Overflow -  var s = "new" ;
      //var s2 = `There are so many ${s} ideas these days !!`
      window.alert(`Your password will be ${confirmLength} characters long`);

    // password criteria selection
    var confirmCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click 'OK' to use Special Characters or 'Cancel' to not use Special Characters.");
    var confirmNum = window.confirm("Would you like to include NUMBERS in your password? Click 'OK' to use Numbers or 'Cancel' to not use Numbers.");    
    var confirmLower = window.confirm("Would you like to include LOWERCASE letters in your password? Click 'OK' to use Lowercase or 'Cancel' to not use Lowercase.");
    var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' to use Uppercase or 'Cancel' to not use Uppercase.");

      // criteria validation that at least one option was chosen 
      while(confirmUpper === false && confirmLower === false && confirmCharacter === false && confirmNum === false) {
        alert("You must choose at least one parameter");
        var confirmCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click 'OK' to use Special Characters or 'Cancel' to not use Special Characters.");
        var confirmNum = window.confirm("Would you like to include NUMBERS in your password? Click 'OK' to use Numbers or 'Cancel' to not use Numbers.");    
        var confirmLower = window.confirm("Would you like to include LOWERCASE letters in your password? Click 'OK' to use Lowercase or 'Cancel' to not use Lowercase.");
        var confirmUpper = window.confirm("Would you like to include UPPERCASE letters in your password? Click 'OK' to use Uppercase or 'Cancel' to not use Uppercase.");   
    } 

      // used to store characters based on criteria selection
      var passwordCharacters = []
      
    if (confirmCharacter) {
      passwordCharacters = passwordCharacters.concat(Character)
    }

    if (confirmNum) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lower)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(Upper)
    }

      // loop through based on value input entered in first prompt (length of password)
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);