
      //length of password option
  var lengthReq = function() {
    //ask user to select password length
    length = window.prompt("Please enter a password length between 8 and 128 characters");
    console.log(length)
    //if user selects 'cancel', reset generator 
    if (length === null) {
      return null
    }
    //if user enters a length within the requirements, return that length
    else if (length >= 8 && length <=128) { 
      return length;
    }
     //reset function if user enters an answer outside of the requirements
    else {
      window.alert("Please enter a valid option");
      lengthReq();     
    }
  };
  
     //uppercase letter option
  var getUppercase = function() {
    //ask user if they want to include uppercase letters in password
    var uppercase = window.confirm("Do you want to include Uppercase letters? If not, select 'cancel'.") 
    //if user selects 'cancel', reset generator 
    if (uppercase === null) {
      return null
    }
    //if user selects 'Ok', add uppercase letters
    if (uppercase) {
      var uppercaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    } 
    //if user selects 'cancel', do not add letters
    else  {
      var uppercaseChoice = ""
    }
    //reset function if user enters an answer outside of the requirements
    return uppercaseChoice
   };
  
      //lowercase letter option
  var getLowercase = function() {
    //ask user if they want to include lowercase letters in password
    var lowercase = window.confirm("Do you want to include lowercase letters? If not, select 'cancel'.") 
    //if user selects 'cancel', reset generator 
    if (lowercase === null) {
      return null
    }
    //if user selects 'Ok', add lowercase letters
    if (lowercase) {
      var lowercaseChoice = "abcdefghijklmnopqrstuvwxyz" 
    } 
    //if user selects 'cancel', produce empty string
    else  {
      var lowercaseChoice = ""
    }
    //reset function if user enters an answer outside of the requirements
    return lowercaseChoice;
  };
  
     //numbers option
  var getNumbers = function() {
    //ask user if they want to include numbers in password
    var numbers = window.confirm("Do you want to include numbers? If not, select 'cancel'.") 
    //if user selects 'cancel', reset generator 
    if (numbers === null) {
      return null
    }
    //if user selects 'Ok', add numbers
    if (numbers) {
      var numbersChoice = "0123456789" 
    } 
    //if user selects 'cancel', produce empty string
    else  {
      var numbersChoice = ""
    }
    //reset function if user enters an answer outside of the requirements
    return numbersChoice;
  };
  

     //special characters option
  var getSpecialChar = function() {
    //ask user if they want to include special characters
    var specialChar = window.confirm("Do you want to include special characters? If not, select 'cancel'.") 
    //if user selects 'cancel', reset generator 
    if (specialChar === null) {
      return null
    }
    //if user selects 'Ok', add special characters
    if (specialChar) {
      var specialCharChoice = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } 
    //if user selects 'cancel', produce emptry string
    else {
      var specialCharChoice = ""
    }
    //reset function if user enters an answer outside of the requirements
    return specialCharChoice;
  };
  

    //password generator 
  function generatePassword() {
    //reset if user clicks 'cancel' throughout the prompts
    var length = lengthReq();
    if (length === null) {
      return "";
    }
    var uppercase = getUppercase(); 
    if (uppercase === null) {
      return "";
    }
    var lowercase = getLowercase();
    if (lowercase === null) {
      return "";
    } 
    var numbers = getNumbers();
    if (numbers === null) {
      return "";
    }
    var special = getSpecialChar();
    if (special === null) {
      return "";
    }
    
    //bring user back to start if they don't select 'Ok' for any option
    var allChoices = uppercase + lowercase + numbers + special;
    if (!allChoices) {
      window.alert("You must select 'Ok' for at least one option.");
      return ""
    }
    else {
     var password = "";
     //produce a random password from the user's selection
     for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * allChoices.length);
        password += allChoices.substring(character, character + 1);
    }
    //return the value of all values from the for loop
    return password;
    }
  };
  
    // Get references to the #generate element
  
  var generateBtn = document.querySelector("#generate");
    
   // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
   // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);