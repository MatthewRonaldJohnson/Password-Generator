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
var underBool = false;
var upperBool = false;
var specBool = false;

//Array that will contain the arrays the user wants to get chars from
var accetedArrays = [];

//Variable that takes user input to define length of password
//needs to be an interger between 8 and 128
var passwordLength = 15;

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

//code used from MDN page on Math.random (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

for (i = 0; i < passwordLength; i++) {
  random = getRandomInt(0, accetedArrays.flat().length);
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
