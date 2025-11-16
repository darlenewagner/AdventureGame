// Load the readline-sync library
let readline = require('readline-sync');
// Get input from the user
let name = readline.question("What is your name? ");
// Show the input
console.log("Hello, " + name + "!");

try {
    let result = "hello" / 0;
    if(isNaN(result)){ throw "Undefined!"; }
    console.log("Result: ", result);
} catch (error) {
    console.log("Oops! Something went wrong:", error.message);
}
console.log("The program continues running.");