// have const arrays for numbers, lower, upper, special
// const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", ""]


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

  // function for texts boxes
  requestInfo();

  // test
  console.log(randPass);

  // Sends random password
  return randPass;
}

function requestInfo(){
  // get length of password
  var length = getPassLength();

  // test
  console.log("Given length is: " + length + "\nType: " + typeof length);

  // If length is not appropriate, it ends early
  if(length == 0){
    return;
  }


}

function getPassLength(){
  // pull up prompt
  var length = Number(prompt("How long would you like your password?", "Enter number here"));

  // checks if length is not a number between/including 8 and 128
  if(length < 8 || length > 128 || Number.isNaN(length))
  {
    alert("Please enter a number larger than 8 and smaller than 128.");
  }
  else
  {
    return length;
  }
  // Returns 0 if value is not appropriate
  return 0;
}
