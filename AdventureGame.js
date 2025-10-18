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
console.log("Your job: Become the new sheriff who defeats the werewolf in the badlands!");
console.log("=================================\n");


// Get player name using readline-sync
console.log("Hi, I'm Clem the Prospector. Are you the new sheriff?\n");

console.log("Yes! That's the job I'm here for.\n");

console.log("Heh-Heh! You'd better pray hard to whatever you consider holy!\n");
let playerName = "";
playerName = readline.question("Hi, I'm Edgar the Barber. What is your name, new sheriff? ");

console.log("Welcome, Sheriff " + playerName + "!  I hope I don't have to do more than cut your hair!\n");

// Create variables for player stats
let playerHealth = 100;
let playerSilver = 20;
let currentLocation = "village";
let gameRunning = true;

let inventory = [];

console.log("(You start with " + playerSilver + " silver dollars.)");

console.log("=================================");
console.log("=================================\n");


console.log("Greetings, Blacksmith, are you selling any weapons?\n");
console.log("Yes, I have just the thing for you...");
console.log("It's six-shot blackpowder revolver.");
console.log("Of course, it will cost you eight silver dollars!");
console.log("\nThat's pricey for such an old revolver!\n");
console.log("We're at the end of the boatman's trade route. Buy it or leave it!\n");

console.log("OK! I'll buy it.");
playerSilver = playerSilver - 8;

let weaponDamage = 0;
console.log("What about bullets? Right now, this gun only does a damage of " + weaponDamage + ".");
let inquiry1 = "";
inquiry1 = readline.question("(Ask the Blacksmith about ammunition!)--> ");
//console.log("\n");
console.log("Tee-Hee-Hee! Did you hear that fellas?");
console.log("Our new sheriff asked: " + inquiry1 + "\n");
console.log("Haw! Haw! Haw! Haw!\n");
console.log("Around here, you're going to need silver bullets!\n");
//console.log();
console.log("OK! Where do I get silver bullets?\n");
console.log("From what's left of your silver dollars. " + playerSilver + " is enough for " + playerSilver + " bullets.\n")

console.log("How about six? I need to eat.\n");

console.log("Haw! Haw! Haw!");
console.log("If you're anything like the last two sheriffs, you won't live long enough to need to eat!\n");

console.log("I'm feeling lucky so it's going to be six silver bullets!\n");

console.log("All-righty! Six silver bullets it is.\n");
playerSilver = playerSilver - 6;

console.log("So I have " + playerSilver + " silver dollars left.  Does the hotel over there have food as well as boarding?\n");

console.log("Tee-Hee-Hee! The hotel turned into a saloon. All you're gonna get is whiskey and beer for dinner.");
