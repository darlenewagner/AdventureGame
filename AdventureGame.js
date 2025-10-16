const readline = require('readline-sync');

console.log('Hello World Here!');

// Get player name using readline-sync
let playerName = "";
playerName = readline.question("\nWhat is your name, brave adventurer? ");

console.log("Welcome to the Adventure Game " + playerName + ".");

// Create variables for player stats
let playerHealth = 100;
let playerSilver = 20;
let currentLocation = "village";
let gameRunning = true;

let inventory = [];

console.log("You have " + playerSilver + " silver pieces.");