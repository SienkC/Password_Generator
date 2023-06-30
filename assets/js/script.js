// have const arrays for numbers, lower, upper, special
// const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", ""]


// create array
// print array to screen

var passCondition = {
  length: 0,
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

  // create random password from given info
  // for loop using given length
  // true(1)*num false(0)*num
  // set length for array using given length
  // while array is not full
  // use math.rand(ceiling) to pick 1,2,3,4 from passCondition
  // use math.rand*length of char array


  // check for all if true
  // add random char from arrays
  // while loop stop when new array is full <-put break for full in each if statement

  // test
  console.log(randPass);

  // Sends random password
  return randPass;
}

function requestInfo(){
  // get length of password from user
  getPassLength();
  
  // test
  console.log("Given length is: " + passCondition.length + "\nType: " + typeof passCondition.length );

  // If length is not appropriate, it ends early
  if(passCondition.length === 0){
    return;
  }

  // Get type of characters from user
  passConditions();
}

function getPassLength(){
  // pull up prompt
  var userInput = prompt("How long would you like your password?", "Enter number here");
  
  // turn input into number
  passCondition.length  = Number(userInput);

  console.log(passCondition.length);

  // checks for cancel button and terminates
  if(userInput === null)
  {
    return;
  }
  // checks if length is not a number between/including 8 and 128
  else if(passCondition.length  < 8 || passCondition.length  > 128 || Number.isNaN(passCondition.length ))
  {
    alert("Please enter a number larger than 8 and smaller than 128.");

    // calls function again to get correct input
    getPassLength();
  }
  else
  {
    return;
  }
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

  // test
  console.log(passCondition);

  return;
}

