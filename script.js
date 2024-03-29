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
  "n",
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
  "N",
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

//generates and prints out password
function generatePW() {
  debugger
  document.getElementById("password").innerHTML = ""; //this line clears out the previously generated password
  accetedArrays = []; //this line empties the accepted arrays when generating a new password

  //Gets a length value from the user
  passwordLength = document.getElementById("length").value;
  console.log(passwordLength);

  //checks that the length is 8 or more, is 128 or less, and converts the string entered from the user to a number then makes sure that number is an interger
  if (!(passwordLength >= 8 && passwordLength <= 128 && Number.isInteger(Number(passwordLength)))) {
    alert("Password Length must be an interger between 8 and 128! Try again");
    return;
  }

  //ask user if they want to use a character list, if so adds it to the accetedArrays
  numBool = document.getElementById("num").checked;
  if (numBool) {
    accetedArrays.push(numberArray);
  }
  underBool = document.getElementById("lower").checked;
  if (underBool) {
    accetedArrays.push(undercaseArray);
  }
  upperBool = document.getElementById("upper").checked;
  if (upperBool) {
    accetedArrays.push(uppercaseArray);
  }
  specBool = document.getElementById("special").checked;
  if (specBool) {
    accetedArrays.push(specArray);
  }

  //checks that at least one char list has been selected, if accetedArrays is undefined or has no length it will end the function
  if (accetedArrays === undefined || accetedArrays.length === 0) {
    alert("Your password must be able to have at least one of numbers, lowercase letters, uppercase letters, or special characters! Try again.");
    return;
  }

  //step that actually generates the password, storing it as an array in generatedPW
  for (i = 0; i < passwordLength; i++) {
    random = getRandomInt(accetedArrays.flat().length);
    generatedPW[i] = accetedArrays.flat()[random];
  }

  //prints out password in the textarea of the document
  for (i = 0; i < generatedPW.length; i++) {
    document.getElementById("password").append(generatedPW[i]);
  }
}
