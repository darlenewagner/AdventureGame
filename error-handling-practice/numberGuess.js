let readline = require('readline-sync');
// Create a number for the user to guess
let secretNumber = 7;
// Get the user's guess
let userGuess = readline.question("Guess a number between 1 and 10: ");

try{
    // input str to number
    let numberGuess = Number(userGuess);

    // Check if it's actually a number
    if(isNaN(numberGuess)){
        throw "Input is not a number!";
    }

    // Check if number is in range
    if(numberGuess < 1 || numberGuess > 10) {
        throw "Number must be strictly between 1 and 10";
    }

    if(numberGuess === secretNumber){
        console.log("Congratulations! You guessed correctly!");
    } else {
        console.log("Sorry, the number was " + secretNumber);
    }
} catch (error) {
    console.log("Error: " + error);
}