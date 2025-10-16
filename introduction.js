const readline = require('readline-sync');

console.log('Hello World Here!');

let userName = "";
userName = readline.question("\nWhat is your name, brave adventurer? ");

console.log("Welcome to the Adventure Game " + userName + ".");

