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
let playerHealth = 90;
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
let barberMedicine = 10;
let weaponDamage = 0;
let blacksmithName = "Jethro";
let innkeeperName = "Felina";

let inventory = [];


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
    console.log("\n<- You are approached by two villagers. ->\n");
    console.log("Howdy, I'm Clem the Prospector. Are you the new sheriff?\n");
    console.log("Yes! That's the job I'm here for.\n");
    console.log("Heh-Heh! You'd better pray hard to whatever you consider holy!\n");
    playerName = readline.question("Howdy, I'm Edgar the Barber. What is your name, new sheriff? ");
    console.log("Welcome, Sheriff " + playerName + "!  I hope I don't have to do more than cut your hair!\n");
}

console.log("\n============================================================");
console.log("<-       Places you may go after giving your name:          ->");
console.log("<-     To remain in the middle of the village, type 1.      ->");
console.log("<-     To follow Edgar the Barber to the Hotel, type 2.     ->");
console.log("<-     To go to Jethro's Blacksmith shop, type 3.           ->");
console.log("<-     To go check your status, type 4.                     ->");
console.log("<-     To head out to the Badlands right away, type 5.      ->");
console.log("<-     To exit the game, type 0                             ->\n");
placeChoice = readline.question("Which of these places to you wish to go? ");

if((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') || (placeChoice === '3') || (placeChoice === '4') || (placeChoice === '5')) {
  placeChoice = Number(placeChoice);
}
else {
    console.log("Need to choose a 0, 1, 2, 3, 4, or 5! Exiting Game.");
    process.exit(1);
}

switch(placeChoice) {
        case 1:
            currentLocation = "village";
            break;
        case 2:
            currentLocation = "hotel";
            break;
        case 3:
            currentLocation = "blacksmith";
            break;
        case 4:
            currentLocation = "status";
            break;
        case 0:
        process.exit(0);
}

if(currentLocation === "status") {
  console.log("\n<- You start with a player health score of " + playerHealth + " out of 100. ->");
  console.log("<-        And you start with " + playerSilver + " silver dollars.          ->\n");

   console.log("\n===========================================================");
   console.log("<-     To remain in the middle of the village, type 1.      ->");
   console.log("<-     To follow Edgar the Barber to the Hotel, type 2.     ->");
   console.log("<-     To go to Jethro's Blacksmith shop, type 3.           ->");
   console.log("<-     To head out to the Badlands right away, type 5.      ->");
   console.log("<-     To exit the game, type 0                             ->\n");
   placeChoice = readline.question("Which of these places to you wish to go? ");

if((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') || (placeChoice === '3') || (placeChoice === '5')) {
  placeChoice = Number(placeChoice);
}
else {
    console.log("Need to choose a 0, 1, 2, 3, or 5! Exiting Game.");
    process.exit(1);
}


switch(placeChoice) {
        case 1:
            currentLocation = "village";
            break;
        case 2:
            currentLocation = "hotel";
            break;
        case 3:
            currentLocation = "blacksmith";
            break;
        case 0:
        process.exit(0);
}

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

    console.log("\n===========================================================");
  console.log("<-     To remain in the middle of the village, type 1.      ->");
  console.log("<-     To go to the Hotel, type 2.                          ->");
  console.log("<-     To check status, type 4.                             ->");
  console.log("<-     To head out to the Badlands right away, type 5.      ->");
  console.log("<-     To exit the game, type 0                             ->\n");
  placeChoice = readline.question("Which of these places to you wish to go? ");

if((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') || (placeChoice === '4') || (placeChoice === '5')) {
  placeChoice = Number(placeChoice);
}
else {
    console.log("Need to choose a 0, 1, 2, 4, or 5! Exiting Game.");
    process.exit(1);
}


switch(placeChoice) {
        case 1:
            currentLocation = "village";
            break;
        case 2:
            currentLocation = "hotel";
            break;
        case 4:
            currentLocation = "status";
            break;
        case 0:
        process.exit(0);
}


}

if(currentLocation === "village") {
  console.log("\nExcuse me Mr. Prospector and Mr. Barber, does the hotel over there have food as well as boarding?\n");
  console.log("Tee-Hee-Hee! The hotel turned into a saloon. All you're gonna get thar is whiskey and beer for dinner.\n");
  console.log("Any place else?\n");
  console.log("I wouldn't recommend heading out to the badlands yet.\n");
  console.log("But you could go down by the river to the General Store.\n");

     console.log("\n========================================================");
  console.log("<-     To follow the Barber to the Hotel, type 2           ->");
  console.log("<-     To go to the Blacksmith shop, type 3                ->");
  console.log("<-     To check status, type 4                             ->");
  console.log("<-     To head out to the Badlands right away, type 5      ->");
  console.log("<-     To exit the game, type 0                            ->\n");
  placeChoice = readline.question("Which of these places to you wish to go? ");

if((placeChoice === '0') || (placeChoice === '2') || (placeChoice == '3') || (placeChoice === '4') || (placeChoice === '5')) {
  placeChoice = Number(placeChoice);
}
else {
    console.log("Need to choose a 0, 2, 3, 4, or 5!! Exiting Game.");
    process.exit(1);
    
}


switch(placeChoice) {
        case 2:
            currentLocation = "hotel";
            break;
        case 3:
            currentLocation = "blacksmith";
        case 4:
            currentLocation = "status";
            break;
        case 0:
        process.exit(0);
}


}


console.log("\n=================================\n");


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
