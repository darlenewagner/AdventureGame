// ===========================================
// The Werewolf Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

//* Game Outline *
//   START GAME
//     |
//     +---Show Location
//     |
//     +---Display Choices
//     |
//     +---Get Player Input
//     |
//     +---Handle Choice
//     |
//     +---Check If Game Should Continue
//     |
//     +---Repeat Until Player Quits, Loses, or Slays the Werewolf
//
// Include readline for player input
const readline = require('readline-sync');

//console.log('Hello World Here!');
console.log("======================================================================");
console.log("<-                       The Werewolf Quest                         ->");
console.log("======================================================================");
console.log("<- Become the new sheriff who defeats the werewolf in the badlands! ->");
console.log("======================================================================\n");

// Create variables for player stats
let playerHealth = 90;
let playerSilver = 20;
let currentLocation = "village";
let previousLocation = "";  // For returning to previous location from 'statusCheck'
// other locations include blacksmith, barber, hotel, river, and badlands.
let villageName = "Silver Bluffs";
let placeChoice = "K";
let statusCheck = true;
let firstTimePlaying = true;
let gameRunning = false;
let monsterDefense = 5;
let barberHealingValue = 30;
let barberMedicine = 10;
let weaponDamage = 0;
let visitedBlacksmith = false;
let wildman = true;
let blacksmithName = "Jethro";
let innkeeperName = "Felina";

let inventory = ["empty", "empty", "empty"];


console.log("<- You have just disembarked the steamboat to walk up to the village of " + villageName + ". ->\n");


//* Selection of player name or character *

let nameOK = false;

let greetLocals = true;
let answer1 = "";
let playerName = "";
console.log("<- Do you wish to greet any of the villagers? ->");
answer1 = readline.question("<- Answer, Y or N: ");

  if((answer1 === "N") || (answer1 === "No") || (answer1 === "n") || (answer1 === "no")) {
      
     while(nameOK == false){
        try {
                playerName = readline.question("< - Choose your name: ");

          if(playerName.trim() == ""){
            throw "Cannot enter a blank space or carriage return as your name.";
          }
          else {
            console.log("<- Greetings Sheriff " + playerName);
            nameOK = true;
          }
        }
        catch(error) {
            console.log("Error: ", error);
        }
      }
    }
   else {
       // Get player name using readline-sync
       console.log("\n<- You are approached by two villagers. ->\n");
       console.log("Howdy, I'm Clem the Prospector. Are you the new sheriff?\n");
       console.log("Yes! That's the job I'm here for.\n");
       console.log("Heh-Heh! You'd better pray hard to whatever you consider holy!\n");

    while(nameOK == false){
        try {
          playerName = readline.question("Howdy, I'm Edgar the Barber. What is your name, new sheriff? ");

           if(playerName.trim() == ""){
            throw "Cannot enter a blank space or carriage return as your name.";
           }
           else {
           console.log("Welcome, Sheriff " + playerName + "!  I hope I don't have to do more than cut your hair!\n");
           nameOK = true;
           }
        }
        catch(error) {
            console.log("Error: ", error);
        }
      }
    }
 

//* Initial selection of menu options *

let correctChoice = false;

//* INITIALIZING CHOICES *
while(correctChoice == false) {
try {
  console.log("\n============================================================");
  console.log("<-       Places you may go after giving your name:          ->");
  console.log("<-     To remain in the middle of the village, type 1.      ->");
  console.log("<-     To go to the Barbershop, type 2.                     ->");
  console.log("<-     To go to the Blacksmith shop, type 3.                ->");
  console.log("<-     To go to the Hotel, type 4.                          ->");
  console.log("<-     To go to the General Store, type 5.                  ->");
  console.log("<-     To go check your status and inventory, type 6.       ->");
  console.log("<-     To head out to the Badlands right away, type 7.      ->");
  console.log("<-     To exit the game, type 0                             ->\n");
  placeChoice = readline.question("Which of these places to you wish to go? ");

if((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') ||
 (placeChoice === '3') || (placeChoice === '4') || (placeChoice === '5') ||
  (placeChoice === '6') || (placeChoice === '7'))
     {
  placeChoice = Number(placeChoice);
  correctChoice = true;
  }
else if(isNaN(placeChoice)){
    throw "Please choose a valid number between 0 and 7!";
  }
else if(placeChoice.trim() == ""){
    throw "Cannot enter a blank space or return without a number!";
}
else {
    throw "The number chosen must be 0, 1, 2, 3, 4, 5, 6, or 7";
    //process.exit(1);
   }
 }
catch(error)
 {
    console.log("\nError: ", error);
 }
}

switch(placeChoice) {
        case 1:
            currentLocation = "village";
            //previousLocation = "village";
            gameRunning = true;
            break;
        case 2:
            currentLocation = "barbershop";
            //previousLocation = "barbershop";
            gameRunning = true;
            break;
        case 3:
            currentLocation = "blacksmith";
            //previousLocation = "blacksmith";
            gameRunning = true;
            break;
        case 4:
            currentLocation = "hotel";
            //previousLocation = "hotel";
            gameRunning = true;
            break;
        case 5:
            currentLocation = "generalStore";
            //previousLcation = "generalStore";
            gameRunning = true;
            break;
        case 6:
            currentLocation = "status";
            gameRunning = true;
            break;
        case 7:
            currentLocation = "badlands";
            //previousLocation = "badlands";
            gameRunning = true;
            break;
        case 0:
            gameRunning = false;
}

//* BEGIN MAIN LOOP FOR GAME PLAY *
while(gameRunning) 
{
  if(currentLocation === "status") {
     console.log("\n<-  You have a player health score of " + playerHealth + " out of 100.  ->");
     console.log("<-            You have " + playerSilver + " silver dollars.              ->");
     if(visitedBlacksmith) {
        for(let i = 0; i < 3; i++)
        {
            disp = i + 1;
            console.log("slot " + disp + ": " + inventory[i]);
        }
        console.log("<-   And you have a revolver with " + weaponDamage + " silver bullets.   ->\n");
     }
         // if(previousLocation === "village") {
         //  currentLocation = previousLocation;
         // }
    }


  if((currentLocation === "blacksmith") && (visitedBlacksmith == false)) 
    {
     console.log("Greetings, Blacksmith, are you selling any weapons?\n");
     console.log("Yes, I have just the thing for you...");
     console.log("It's a six-shot blackpowder revolver.");
     console.log("Of course, it will cost you six silver dollars!");
     console.log("\nThat's pricey for such an old revolver!\n");
     console.log("We're at the end of the boatman's trade route. Buy it or leave it!\n");
     console.log("OK! I'll buy it.");
     // update visitedBlacksmith to true to avoid coming back and losing too much silver
     visitedBlacksmith = true;
     // decrement playerSilver to pay for revolver  
     playerSilver = playerSilver - 6;
     console.log("What about bullets? Right now, this gun only does a damage of " + weaponDamage + ".");
     let inquiry1 = "";
     inquiry1 = readline.question("(Ask the Blacksmith about ammunition!)--> ");
  
     console.log("Tee-Hee-Hee! Did you hear that fellas?");
     console.log("Our new sheriff asked: " + inquiry1 + "\n");
     console.log("Haw! Haw! Haw! Haw!\n");
     console.log("Around here, you're going to need silver bullets!\n");
  
     console.log("OK! Where do I get silver bullets?\n");
     console.log("From what's left of your silver dollars. " + playerSilver + " is enough for " + playerSilver + " bullets.\n")
     console.log("How about six? I need to eat.\n");
     console.log("Haw! Haw! Haw!");
     console.log("If you're anything like the last two sheriffs, you won't live long enough to need to eat!\n");
     console.log("I'm feeling lucky so it's going to be six silver bullets!\n");
     console.log("All-righty! Six silver bullets it is.\n");
     // decrement playerSilver by 6 to create silver bullets
     playerSilver = playerSilver - 6;
     // increment amount of weaponDamage the revolver can do to the werewolf or other monsters.
     weaponDamage = weaponDamage + 6;
     inventory[0] = "revolver";
    }
  else if((currentLocation === "blacksmith") && (visitedBlacksmith == true))
    {
        console.log("<- You do not have enough silver dollars to visit the blacksmith again. ->");
        console.log("<-                 Please choose another location.                      ->\n");
    }
  else if(currentLocation === "village") {
    console.log("=== MIDDLE OF VILLAGE ===");
    console.log("\nExcuse me Mr. Prospector and Mr. Barber, does the hotel over there have food as well as boarding?\n");
    console.log("Tee-Hee-Hee! The hotel turned into a saloon. All you're gonna get thar is whiskey and beer for dinner.\n");
    console.log("Any place else?\n");
    console.log("I wouldn't recommend heading out to the badlands yet, but you can spend the night in the attic of my Barbershop.\n");
    console.log("You could go down by the river to the General Store.\n");

   }
 else if(currentLocation === "barbershop"){
    console.log("=== BARBERSHOP IN VILLAGE ===");
  }
else if(currentLocation === "hotel") {
    console.log("=== HOTEL IN VILLAGE ===");
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
  else if(currentLocation === "generalStore"){
    console.log("=== GENERALSTORE IN VILLAGE ===");
  }
  else if(currentLocation === "badlands") {
       console.log("=== OUT IN THE BADLANDS ===");
    if(wildman) {
     console.log("<- You walk away from the village into the badlands for 1 hour ... ->");
     console.log("<-              The sun is about to set ...                        ->");
     console.log("<-   Suddenly, a wildman pounces on you from behind a boulder!      ->");
     console.log("<-                     The Battle Begins!!!                         ->");
     if(visitedBlacksmith){  
       console.log("<-            You fire your revolver and hit the wildman!            ->");
       weaponDamage = weaponDamage - 1;
       monsterDefense = monsterDefense - 1;

       console.log("<-      The wildman hits you with his club and breaks your ribs!      ->");

       playerHealth = playerHealth - 20;

       while(monsterDefense > 0) {
           console.log("<-            You fire and hit the wildman again!            ->");
           weaponDamage = weaponDamage - 1;
           monsterDefense = monsterDefense - 1;
           if(monsterDefense >= 3){
               console.log("<-      The wildman hits you with his club again and breaks your arm!      ->");
               playerHealth = playerHealth - 30;
           }
        } 
        wildman = false;
        console.log("<-     The wildman is dead, but you are seriously injured!     ->");
        console.log("<-       You must return to the village before nightfall!      ->");
     }
     else { 
           console.log("<-      The wildman hits you with his club and breaks your ribs!      ->");
           playerHealth = playerHealth - 20;
           while(playerHealth > 0) {
               console.log("<-      The wildman hits you with his club again!      ->");
               playerHealth = playerHealth - 30;
           }
         console.log("<-     You are now dead and nightfall is approaching!     ->");
         console.log("<-         Coyotes will devour your body!                 ->");
         gameRunning = false;
     }
    }
    else {
        console.log("<- The wildman is dead.  Return to the village ... ->");
    }

   }
correctChoice = false;

while(correctChoice == false)
{
 try {  
     if(currentLocation === "village") {   
        console.log("\n===========================================================");
        //console.log("<-     To go to the middle of the village, type 1           ->");
        console.log("<-     To go to the Barbershop, type 2.                     ->");
        console.log("<-     To go to the Blacksmith shop, type 3.                ->");
        console.log("<-     To go to the Hotel, type 4.                          ->");
        console.log("<-     To go to the General Store, type 5.                  ->");
        console.log("<-     To go check your status and inventory, type 6.       ->");
        console.log("<-     To head out to the Badlands right away, type 7.      ->");
        console.log("<-     To exit the game, type 0                             ->\n");
      }
      else if(currentLocation === "barbershop") {
        console.log("\n===========================================================");
        console.log("<-     To go to the middle of the village, type 1           ->");
        // console.log("<-     To go to the Barbershop, type 2.                     ->");
        console.log("<-     To go to the Blacksmith shop, type 3.                ->");
        console.log("<-     To go to the Hotel, type 4.                          ->");
        console.log("<-     To go to the General Store, type 5.                  ->");
        console.log("<-     To go check your status and inventory, type 6.       ->");
        // console.log("<-     To head out to the Badlands right away, type 7.      ->");
        console.log("<-     To exit the game, type 0                             ->\n");
      }
      else if(currentLocation === "hotel") {
        console.log("\n===========================================================");
        console.log("<-     To go to the middle of the village, type 1           ->");
        console.log("<-     To go to the Barbershop, type 2.                     ->");
        console.log("<-     To go to the Blacksmith shop, type 3.                ->");
        // console.log("<-     To go to the Hotel, type 4.                          ->");
        console.log("<-     To go to the General Store, type 5.                  ->");
        console.log("<-     To go check your status and inventory, type 6.       ->");
        // console.log("<-     To head out to the Badlands right away, type 7.      ->");
        console.log("<-     To exit the game, type 0                             ->\n");

      }
      else {
        console.log("\n===========================================================");
        console.log("<-     To go to the middle of the village, type 1           ->");
        console.log("<-     To go to the Barbershop, type 2.                     ->");
        console.log("<-     To go to the Blacksmith shop, type 3.                ->");
        console.log("<-     To go to the Hotel, type 4.                          ->");
        console.log("<-     To go to the General Store, type 5.                  ->");
        console.log("<-     To go check your status and inventory, type 6.       ->");
        console.log("<-     To head out to the Badlands right away, type 7.      ->");
        console.log("<-     To exit the game, type 0                             ->\n");
       }
       placeChoice = readline.question("Which of these places to you wish to go? ");
    
 if(((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') ||
  (placeChoice === '3') || (placeChoice === '4') || (placeChoice === '5') ||
  (placeChoice === '6') || (placeChoice === '7')) && ((currentLocation !== "village") && 
  (currentLocation !== "hotel") && (currentLocation !== "barbershop"))) 
     {
        placeChoice = Number(placeChoice);
        correctChoice = true;
        // console.log("## Not in the village ##");
     }
 else if(((placeChoice === '0') || (placeChoice === '2') || (placeChoice === '3') ||
  (placeChoice === '4') || (placeChoice === '5') || (placeChoice === '6') ||
  (placeChoice === '7')) && (currentLocation === "village")){
             placeChoice = Number(placeChoice);
             correctChoice = true;
            // console.log("## Leaving the middle of the village ##");
     }
 else if(((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '3') ||
  (placeChoice === '4') || (placeChoice === '5') || (placeChoice === '6')) && (currentLocation === "barbershop")){
             placeChoice = Number(placeChoice);
             correctChoice = true;
    }
 else if(((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') ||
  (placeChoice === '3') || (placeChoice === '5') || (placeChoice === '6')) && (currentLocation === "hotel")){
             placeChoice = Number(placeChoice);
             correctChoice = true;
             console.log("# Hotel #");
    }
 else if(isNaN(placeChoice)){
     throw "Please choose a valid number between 0 and 7!";
   }
 else if(placeChoice.trim() == ""){
     throw "Cannot enter a blank space or return without a number!";
    }
 else if(currentLocation === "village"){
     throw "The number chosen must be 0, 2, 3, 4, 5, 6, or 7";
    }
 else if(currentLocation === "barbershop"){
     throw "The number chosen must be 0, 1, 3, 4, 5, or 6";
  }
  else if(currentLocation === "hotel"){
     throw "The number chosen must be 0, 1, 2, 3, 5, or 6";
  }
 else {
         throw "The number chosen must be 0, 1, 2, 3, 4, 5, 6, or 7";
     }
   }
 catch(error)
   {
     console.log("\nError: ", error);
   }

 }


switch(placeChoice) 
   {
        case 1:
            currentLocation = "village";
            //previousLocation = "village";
            break;
        case 2:
            currentLocation = "barbershop";
            //previousLocation = "barbershop";
            break;
        case 3:
            currentLocation = "blacksmith";
            //previousLocation = "blacksmith";
            break;
        case 4:
            currentLocation = "hotel";
            //previousLocation = "hotel";
            gameRunning = true;
            break;
        case 5:
            currentLocation = "generalStore";
            //previousLocation = "generalStore";
            gameRunning = true;
            break;
        case 6:
            currentLocation = "status";
            break;
        case 7:
            currentLocation = "badlands";
            //previousLocation = "badlands";
            break;
        case 0:
            gameRunning = false;
   }
  }
