// have const arrays for numbers, lower, upper, special

// hit button prompt for number

// if <8 or >128 alert

// bring up confirms if number works
// confirm lowercase
// confirm uppercase
// confirm numeric
// confirm special characters

// create array
// print array to screen

// How JavaScript talks to html on page
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}

function generatePassword(){
  // Temp value
  var randPass = "Hello";



  // test
  console.log(randPass);

  // Sends random password
  return randPass;
}