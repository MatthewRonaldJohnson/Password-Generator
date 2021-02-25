//Arrays used to generate list of acceptable characters
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

//Variables that hold boolean values based on user inputs for what chars list to use
var numBool = true;
var underBool = true;
var upperBool = true;
var specBool = true;

//Array that will contain the arrays the user wants to get chars from
var accetedArrays = [];

//Variable that takes user input to define length of password
//needs to be an interger between 8 and 128
var passwordLength = 20;


//Checks that user entered passwordLength is between 8 & 128 and is an interger 
if (passwordLength >= 8 && passwordLength <= 128 && Number.isInteger(passwordLength)){
  console.log("true");
}

//Array that will hold generated password
var generatedPW = [0];

//Set of if statments that add selected arrays into acctped arrays list
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

//function that generates a random integer between 0 and max value (inclusive of 0 and exclusive of max)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (i = 0; i < passwordLength; i++) {
  random = getRandomInt(accetedArrays.flat().length);
  generatedPW[i] = accetedArrays.flat()[random];
}

console.log(generatedPW);

for (y = 0; y < generatedPW.length; y++) {
  console.log(generatedPW[y]);
}

// starter code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
