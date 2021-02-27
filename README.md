# Password-Generator
Homework 3: Password Generator made with Javascript

Goal: Make a password generator with Javascript. The generator should take user inputs to set the length of the generator password and let the user select what types of characters to be included. 

Webpage is deployed [here](https://matthewronaldjohnson.github.io/Password-Generator/).

An alternative version where user input is taken in through the page without the use of prompts is stored in the 'Checkbox-Version' branch. 

## Funactionality 

On loading Website will look like this

![default view](https://raw.githubusercontent.com/MatthewRonaldJohnson/Password-Generator/main/assets/img/Default-Screen.PNG)

Upon clicking the generate password button you will be given this prompt

![password length prompt](https://raw.githubusercontent.com/MatthewRonaldJohnson/Password-Generator/main/assets/img/passWordLength.PNG)

Once you input your desire password length you will get 4 prompts asking which character sets you want included in possible pieces of the password

![Character List select prompt](https://raw.githubusercontent.com/MatthewRonaldJohnson/Password-Generator/main/assets/img/char-list-select.PNG)

Assuming the password length was valid and at least one character list was selected, the password would then display in the box. 

![Generated Password Example](https://raw.githubusercontent.com/MatthewRonaldJohnson/Password-Generator/main/assets/img/generated-password.PNG)

You can then click the button again to generate another password, this will remove the previously generated one from the screen.

## Resources I used when Building this Application

MDN Page on Math.random(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

MDN Page on Array.protoype.flat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

MDN Page on Number.isInteger(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

Javascript.info page on alert, prompt, and confirm: https://javascript.info/alert-prompt-confirm

Go Make Things page on converting strings to numbers: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/

w3schools page on onclick events: https://www.w3schools.com/jsref/event_onclick.asp
