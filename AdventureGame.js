// ===========================================
// The Werewolf Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

//console.log('Hello World Here!');
console.log("=================================");
console.log("       The Werewolf Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the werewolf in the badlands!");


// Get player name using readline-sync
let playerName = "";
playerName = readline.question("\nWhat is your name, brave adventurer? ");

console.log("Welcome, " + playerName + "!");

// Create variables for player stats
let playerHealth = 100;
let playerSilver = 20;
let currentLocation = "village";
let gameRunning = true;

let inventory = [];

console.log("You start with " + playerSilver + " silver dollars.");
