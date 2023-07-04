// function revString(str) {

//     const arr = str.split("");
//     arr.reverse();

//     str = arr.join("");

//     console.log(str);
// }


// ****
// revString('jaycel');

// window.alert('hello pre');


// ****
// let firstName = 'Danilo';
// let age = 21 + 1;
// let student = true;

// console.log('hello ', firstName);
// console.log('you are going to be ', age , ' this year!');

// document.getElementById('p1').innerHTML = 'You are going to be ' + age + ' years old this year'
// document.getElementById('p2').innerHTML = 'The modern art in the philippines';
// document.getElementById('p3').innerHTML = 'THE MODERN ART IN THE PHILIPPINES!';


// *****

// student += 1 // augmented assignent operator

// **********************

// let username = window.prompt('Whats your name?');
// console.log(username);


// ************************
// let username;
// document.getElementById('myButton').onclick = function() {

//     username = document.getElementById('myText').value;
//     console.log(username);
//     document.getElementById('myLabel').id907nnerHTML =  'Hello ' + username;
// }
 

// ***********************


// let salaryPerHour = window.prompt('whats your slary per hour');
// let hour = window.prompt('the number of hours');

// console.log('Your total salary per day is ', salaryPerHour * hour);

// function myFunction() {

//     for (i = 0; i < 10; i++) {
//         console.log(i);
//     }

//     console.log('Loop stopped!');
// }
 
// myFunction();



// const age = 17

// if (age >= 18) {
//     console.log('you are eligible to vote')
// }else {
//     console.log('you are not eligible to vote')
// }


// const numbers = [1, 2, 3, 4, 5]

// for (number of numbers) 
//   console.log(number)

// function showPrompt() {

//   const name = prompt('What is your name?');
//   const outputElement = document.querySelector('.danils');
//   outputElement.textContent = ' Hello, ' + name + "!";
// }

// let user = 'john',
//     age = 25;
//     message = 'hello!'


// console.log(user)

// if(user === 0) {
//     console.log("hey what's up?")
// }


// const lotsOfDecimal = 1.2387498372847;

// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);

// console.log(twoDecimalPlaces);

// let myNumber = 74
// myNumber = myNumber + 3;

// console.log(myNumber)

// const num1 = 9
// const num2 = 4

// const result1 = 9 * num1;

// const result2 = num1 ** 3;

// const result3 = num1 / num2;

// console.log(result1)
// Emoji mapping for spaces
// Emoji mapping for spaces
// Emoji mapping for spaces
const spaceEmoji = "🤸‍♀️"; 

const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const convertButton = document.getElementById("convert-button");

// Restore the converted sentence from local storage if available
const storedSentence = localStorage.getItem("convertedSentence");
if (storedSentence) {
  outputText.value = storedSentence;
}

function convertSpacesToEmojis() {
  const sentence = inputText.value;
  const convertedSentence = sentence.replaceAll(" ", spaceEmoji);
  outputText.value = convertedSentence;
  
  // Store the converted sentence in local storage
  localStorage.setItem("convertedSentence", convertedSentence);
}

function copyOutputText() {
  outputText.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

convertButton.addEventListener("click", convertSpacesToEmojis);




