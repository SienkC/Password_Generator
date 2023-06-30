// const arrays for lower, upper, numbers, special characters
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "#", "$", "%", "&", "*", "?", "@", "^"];

// user input obj
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
  // Array for password
  var randPass = [];

  // function for texts boxes
  requestInfo();

  // loop while password length is less than user length input
  while(randPass.length < passCondition.length)
  {
    // if user wants lowercase
    if(passCondition.isLower && Math.floor(Math.random() * 2)){
      // add random lowercase to array
      randPass.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
      // check length and stop loop if needed
      if(randPass.length >= passCondition.length){
        break;
      }
    }

    // if user wants uppercase
    if(passCondition.isUpper && Math.floor(Math.random() * 2)){
      // add rand uppercase to array
      randPass.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
      // check length and stop loop if needed
      if(randPass.length >= passCondition.length){
        break;
      }
    }

    // if user wants numbers
    if(passCondition.isNum && Math.floor(Math.random() * 2)){
      // add rand num to array
      randPass.push(numbers[Math.floor(Math.random() * numbers.length)]);
      // check length and stop loop if needed
      if(randPass.length >= passCondition.length){
        break;
      }
    }

    // if user wants special characters
    if(passCondition.isSpecial && Math.floor(Math.random() * 2)){
      // add rand spec to array
      randPass.push(special[Math.floor(Math.random() * special.length)]);
      // check length and stop loop if needed
      if(randPass.length >= passCondition.length){
        break;
      }
    }
  }

  // Sends random password and converts to string (no commas)
  return randPass.join("");
}

function requestInfo(){
  // get length of password from user
  getPassLength();


  if(passCondition.length === 0)
  {
    return;
  }

  // Get type of characters from user
  passConditions();
  return;
}

function getPassLength(){
  // pull up prompt
  var userInput = prompt("How long would you like your password?", "Enter number here");
  
  // turn input into number
  passCondition.length  = Number(userInput);

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
  if(confirm("Do you want your password to have lowercase letters?")){
    // They pressed okay
    passCondition.isLower = true;
  }
  else{
    // They pressed cancel
    passCondition.isLower = false;
  }

  // uppercase
  if(confirm("Do you want your password to have uppercase letters?")){
    // if okay
    passCondition.isUpper = true;
  }
  else{
    // if cancel
    passCondition.isUpper = false;
  }

  // numbers
  if(confirm("Do you want your password to have numbers?")){
    // if okay
    passCondition.isNum = true;
  }
  else{
    // if cancel
    passCondition.isNum = false;
  }

  // special characters
  if(confirm("Do you want your password to have special characters?")){
    // if okay
    passCondition.isSpecial = true;
  }
  else{
    // if cancel
    passCondition.isSpecial = false;
  }

  // checks if user said cancel to all
  if(!(Object.values(passCondition).includes(true))){
    alert("Please click 'OK' on at least one option.");

    // calls function again
    passConditions();
  }
  return;
}

