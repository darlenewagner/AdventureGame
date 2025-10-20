// ===========================================
// The Werewolf Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

//console.log('Hello World Here!');
console.log("=================================");
console.log("<-     The Werewolf Quest      ->");
console.log("=================================");
console.log("<- Become the new sheriff who defeats the werewolf in the badlands! ->");
console.log("=================================\n");

// Create variables for player stats
let playerHealth = 100;
let playerSilver = 20;
let currentLocation = "village";
// other locations include blacksmith, barber, hotel, river, and badlands.
let villageName = "Silver Bluffs";
let placeChoice = "K";
let statusCheck = true;
let firstTimePlaying = true;
let gameRunning = true;
let monsterDefense = 5;
let barberHealingValue = 30;
let weaponDamage = 0;

let inventory = [];

if(statusCheck) {
  console.log("<- You start with a player health score of " + playerHealth + ". ->");
  console.log("<-    And you start with " + playerSilver + " silver dollars.     ->\n");
}

console.log("<- You have just disembarked the steamboat to walk up to the village of " + villageName + ". ->\n");

let greetLocals = true;
let answer1 = "";
let playerName = "";
console.log("<- Do you wish to greet any of the villagers? ->");
answer1 = readline.question("<- Answer, Y or N: ");

if((answer1 === "N") || (answer1 === "No") || (answer1 === "n") || (answer1 === "no")) {
    playerName = readline.question("< - Choose your name: ");
    console.log("<- Greetings Sheriff " + playerName);
}
else {
    // Get player name using readline-sync
    console.log("Hi, I'm Clem the Prospector. Are you the new sheriff?\n");
    console.log("Yes! That's the job I'm here for.\n");
    console.log("Heh-Heh! You'd better pray hard to whatever you consider holy!\n");
    playerName = readline.question("Hi, I'm Edgar the Barber. What is your name, new sheriff? ");
    console.log("Welcome, Sheriff " + playerName + "!  I hope I don't have to do more than cut your hair!\n");
}

console.log("\n=================================")
console.log("<-            Places you may go after giving your name:             ->");
console.log("<-     To remain in the middle of the village, type 'V' or 'v'.     ->");
console.log("<-     To follow Edgar the Barber to his shop, type 'B' or 'b'.     ->");
console.log("<-     To go to the Blacksmith shop, type 'K' or 'k'.               ->");
console.log("<-     To go to the Hotel, type 'H' or 'h':                         ->");
console.log("<-     To head out to the Badlands right away, type 'X' or 'x'      ->\n");
placeChoice = readline.question("Which of these places to you wish to go? ");

switch(placeChoice) {
    case "V":
        currentLocation = "village";
        break;
    case "v":
        currentLocation = "village";
        break;
    case "B":
        currentLocation = "barber";
        break;
    case "b":
        currentLocation = "barber";
        break;
    case "K":
        currentLocation = "blacksmith";
        break;
    case "k":
        currentLocation = "blacksmith";
        break;
    case "H":
        currentLocation = "hotel";
        break;
    case "h":
        currentLocation = "hotel";
        break;
    case "X":
        currentLocation = "badlands";
        break;
    case "x":
        currentLocation = "badlands";
}

console.log("\n=================================");
console.log("=================================\n");

if(currentLocation === "blacksmith") {
  console.log("Greetings, Blacksmith, are you selling any weapons?\n");
  console.log("Yes, I have just the thing for you...");
  console.log("It's a six-shot blackpowder revolver.");
  console.log("Of course, it will cost you eight silver dollars!");
  console.log("\nThat's pricey for such an old revolver!\n");
  console.log("We're at the end of the boatman's trade route. Buy it or leave it!\n");

  console.log("OK! I'll buy it.");
  playerSilver = playerSilver - 8;

  
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
  weaponDamage = weaponDamage + 6;
  console.log("So I have " + playerSilver + " silver dollars left and my weaponDamage is " + weaponDamage + ".");
}


console.log("\nExcuse me Mr. Prospector, does the hotel over there have food as well as boarding?\n");
console.log("Tee-Hee-Hee! The hotel turned into a saloon. All you're gonna get is whiskey and beer for dinner.");


console.log("=================================");
console.log("=================================\n");

currentLocation = "hotel";

if(currentLocation === "hotel") {
  console.log("Good evening Sheriff " + playerName + ". I'm Felina the hotel owner.\n");
  console.log("Pleased to make your aquaintance ma'am.\n");
  console.log("I want to help you because if you survive the first week, then you survive!");
  console.log("The best thing to do if you see the werewolf is to run and not fight until you can make friends who can help you.");
  console.log("Even then, you can still get hurt running from the werewolf or any of his demon-spawn.\n");
  console.log("Demon-spawn!?\n");
  console.log("Yes, Demon-spawn were once humans but they got turned into wildmen and dogmen by the werewolf.");
  console.log("The effort to escape a dogman or wildman can cost you 20 health points.");
  console.log("It would take " + monsterDefense + " bullets from your old revolver to kill a demon-spawn and more to kill the werewolf.");
  console.log("And you will have to go to the barber within a half day to get any of your wounds cauterized.\n");
  console.log("What if I'm too far outside town?\n");
  console.log("Then the wounds could turn you into demon-spawn if you have any human ancestry.");
  console.log("Just when in doubt, go to Edgar the Barber. I helped him with herbal healing too.");
  console.log("Each of his treatments can restore your health by 30 points.\n");


  console.log("So let me get this straight, it takes " + monsterDefense + " bullets to kill a demon-spawn?\n");
  console.log("Yes, and a lot more than " + monsterDefense + " to kill the werewolf.");
  console.log("And I can lose 20 health just by escaping one of these monsters while Edgar can give me " + barberHealingValue + " health points?\n");
}
