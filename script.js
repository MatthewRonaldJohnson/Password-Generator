//Defining variables globally
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //these four arrays hold the different master list of possible characters for the password
var undercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specArray = [
  "",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\u005C",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var passwordLength = 8; //length of password that user will input, defaults to 8
var numBool = true; //these variables hold the user input on if to use a certain set of characters or not
var underBool = true;
var upperBool = true;
var specBool = true;
var accetedArrays = []; //Array that will contain the arrays the user wants to get chars from
var generatedPW = []; //Array that will hold generated password

//function that generates a random integer between 0 and max value (inclusive of 0 and exclusive of max)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePW () {
  document.getElementById("password").innerHTML = ""; //this line clears out the previously generated password
  passwordLength = prompt ("Enter your desired password length(must be an interger between 8 and 128", passwordLength);
  if (!(passwordLength >= 8 && passwordLength <= 128)){
    alert("Password Length must be an interger between 8 and 128!");
    return;
  }
  numBool = confirm("Do you want your password to contain numbers?");
  underBool = confirm("Do you want your password to contain lowercase letters?");
  upperBool = confirm("Do you want your password to contain uppercase letters?");
  specBool = confirm("Do you want your password to contain special characters");
  if (numBool) {
    accetedArrays.push(numberArray);
  }
  if (underBool) {
    accetedArrays.push(undercaseArray);
  }
  if (upperBool) {
    accetedArrays.push(uppercaseArray);
  }
  if (specBool) {
    accetedArrays.push(specArray);
  }
  if (accetedArrays === undefined || accetedArrays.length === 0){
    alert("You must select at least one of the character list");
    return;
  }
  for (i = 0; i < passwordLength; i++) {
    random = getRandomInt(accetedArrays.flat().length);
    generatedPW[i] = accetedArrays.flat()[random];
  }
  //loop that prints out PW in the #password textarea
  for (i = 0; i < generatedPW.length; i++) {
  console.log(generatedPW[i]);
  document.getElementById("password").append(generatedPW[i]);
  }
}

generatePW();



// //starter code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
