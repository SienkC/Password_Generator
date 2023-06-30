// have const arrays for numbers, lower, upper, special
// const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", ""]


// confirm lowercase
// confirm uppercase
// confirm numeric
// confirm special characters

// create array
// print array to screen

var passCondition = {
  isLower: false,
  isUpper: false,
  isNum: false,
  isSpecial: false
};

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

  passConditions();

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

function passConditions(){
  // lowercase
  if(confirm("Do you want your password to have lowercase letters?"))
  {
    // They pressed okay
    passCondition.isLower = true;
  }
  else{
    // They pressed cancel
    passCondition.isLower = false;
  }

  // uppercase
  if(confirm("Do you want your password to have uppercase letters?"))
  {
    // if okay
    passCondition.isUpper = true;
  }
  else{
    // if cancel
    passCondition.isUpper = false;
  }

  // numbers
  if(confirm("Do you want your password to have numbers?"))
  {
    // if okay
    passCondition.isNum = true;
  }
  else{
    // if cancel
    passCondition.isNum = false;
  }

  // special characters
  if(confirm("Do you want your password to have special characters?"))
  {
    // if okay
    passCondition.isSpecial = true;
  }
  else{
    // if cancel
    passCondition.isSpecial = false;
  }

  // checks if user said cancel to all
  if(!(Object.values(passCondition).includes(true)))
  {
    alert("Please click 'OK' on at least one option.");

    // calls function again
    passConditions();

    // test
    console.log("All false");
    console.log(Object.values(passCondition).includes(true));
  }

  console.log(passCondition);

  return;
}

