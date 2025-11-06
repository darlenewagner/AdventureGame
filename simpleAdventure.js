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
let player = true;
let playerHealth = 90;
let playerSilver = 20;
let currentLocation = "landing";
let previousLocation = "landing";  // For returning to previous location from 'statusCheck'
// other locations include blacksmith, barber, hotel, river, and badlands.
let villageName = "Silver Bluffs";
let placeChoice = "K";
let statusCheck = true;
let firstTimePlaying = true;
let atLanding = true;
let correctChoice = false;
let gameRunning = false;
let monsterDefense = 5;
let barberHealingValue = 30;
let barberMedicine = 10;
let weaponDamage = 0;
let visitedBlacksmith = false;
let wildman = true;
let wildmanBounty = false;
let wildman2 = false;
let dogman1 = true;
let dogman1Bounty = false;
let dogman2 = true;
let dogman2Bounty = false;
let dogman3 = true;
let dogman3Bounty = false;
let dogmanBite = false;
let blacksmithName = "Jethro";
let innkeeperName = "Felina";
let spokenWithInnkeeper = false;

let inventory = ["empty", "empty", "empty", "empty"];

//
//* ########## HOUSEKEEPING FUNCTIONS FOR TIMING AND FLOW OF EXECUTION ##########
//
// Define a sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


//
// ########## LOCATION CHOICE FUNCTIONS: chooseLocation() and movePlayer() ##########
//
//* Begin declaration of function chooseLocation() * enabling user to choose where to go in game *

function chooseLocation(currentLocation, previousLocation, atLanding, correctChoice) {

try {  
     if((currentLocation === "landing") || (currentLocation === "village")) {   
        console.log("\n===========================================================");
        if(currentLocation === "landing"){ 
            console.log("<-     To go to the middle of the village, type 1           ->");
            atLanding = false;
          }
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
      else if(currentLocation === "generalStore"){
        console.log("\n===========================================================");
        console.log("<-     To go to the middle of the village, type 1           ->");
        console.log("<-     To go to the Barbershop, type 2.                     ->");
        console.log("<-     To go to the Blacksmith shop, type 3.                ->");
        console.log("<-     To go to the Hotel, type 4.                          ->");
        // console.log("<-     To go to the General Store, type 5.                  ->");
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
  (currentLocation !== "hotel") && (currentLocation !== "barbershop") && (currentLocation !== "generalStore"))) 
     {
        placeChoice = Number(placeChoice);
        correctChoice = true;
        atLanding = false;
        // previousLocation = "";
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
             //console.log("# Previously at Barbershop #");
    }
 else if(((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') ||
  (placeChoice === '3') || (placeChoice === '5') || (placeChoice === '6')) && (currentLocation === "hotel")){
             placeChoice = Number(placeChoice);
             correctChoice = true;
             //console.log("# Previously at Hotel #");
    }
 else if(((placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') ||
  (placeChoice === '3') || (placeChoice === '4') || (placeChoice === '6')) && (currentLocation === "generalStore")){
             placeChoice = Number(placeChoice);
             correctChoice = true;
             //console.log("# Previously at General Store #");
    }
   else if((currentLocation === "landing") && ( (placeChoice === '0') || (placeChoice === '1') || (placeChoice === '2') ||
   (placeChoice === '3') || (placeChoice === '4') || (placeChoice === '5') ||
   (placeChoice === '6') || (placeChoice === '7') )) {
             placeChoice = Number(placeChoice);
             correctChoice = true;
             atLanding = false;
             //console.log("Previously at Landing");
     }
 else if(isNaN(placeChoice)){
     throw "Please choose a valid number between 0 and 7!";
   }
 else if(placeChoice.trim() == ""){
     throw "Cannot enter a blank space or return without a number!";
    }
 else if(currentLocation === "landing"){
     throw "The number chosen must be 0, 1, 2, 3, 4, 5, 6, or 7";
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
  else if(currentLocation === "generalStore"){
      throw "The number chosen must be 0, 1, 2, 3, 4, or 6";   
  }
 else {
         throw "The number chosen must be 0, 1, 2, 3, 4, 5, 6, or 7";
     }
   }
 catch(error)
   {
     console.log("\nError: ", error);
   }

  return [placeChoice, correctChoice];
}

//* End declaration of function chooseLocation() *

//* Begin declaration of function movePlayer() *

function movePlayer(placeChoice, currentLocation, previousLocation, gameRunning) 
 {
   if(gameRunning === false)
   {
     placeChoice = 0;
   }

  switch(placeChoice) 
   {
        case 1:
            currentLocation = "village";
            previousLocation = "village";
            gameRunning = true;
            break;
        case 2:
            currentLocation = "barbershop";
            previousLocation = "barbershop";
            gameRunning = true;
            break;
        case 3:
            currentLocation = "blacksmith";
            previousLocation = "blacksmith";
            gameRunning = true;
            break;
        case 4:
            currentLocation = "hotel";
            previousLocation = "hotel";
            gameRunning = true;
            break;
        case 5:
            currentLocation = "generalStore";
            previousLocation = "generalStore";
            gameRunning = true;
            break;
        case 6:
            currentLocation = "status";
            gameRunning = true;
            break;
        case 7:
            currentLocation = "badlands";
            previousLocation = "badlands";
            gameRunning = true;
            break;
        case 0:
            gameRunning = false;
   }
   return [currentLocation, previousLocation, gameRunning];
}

//* End declaration of function movePlayer() *

//
// ######## GAME PLAY FUNCTIONS: showStatus(), useHealing(), and processWildmanCombat() ########
//
//* Begin declaration of function showStatus() * for showing health, money, location, and inventory *

function showStatus(playerHealth, playerSilver, previousLocation, inventory, weaponDamage) {
      
     console.log("\n<-  You have a player health score of " + playerHealth + " out of 100.  ->");
     console.log("<-            You have " + playerSilver + " silver dollars.              ->");
     console.log("<-   And your current location is " + previousLocation + ".");
     if((inventory[0] != "empty") || (inventory[1] != "empty") || (inventory[2] != "empty") || (inventory[3] != "empty")) {
        for(let i = 0; i < 4; i++)
        {
            disp = i + 1;
            console.log("pouch " + disp + ": " + inventory[i]);
        }
        console.log("<-   You have a revolver with " + weaponDamage + " silver bullets.   ->\n");
        
     }
}

//* End declaration of function showStatus() *

//* Begin declaration of function useHealing() *

function useHealing(playerHealth, inventory) {
  let foundWoundKit = false;
  let indexOfKit = 0;
   for(let i = 0; i < 4; i++){
     if(inventory[i] === "woundKit"){
       foundWoundKit = true;
       indexOfKit = i;
     }
   }
  
   if((playerHealth < 70) && (foundWoundKit == true)){
      console.log("Your health is " + playerHealth + " and you have a wound kit.");
      sleep(2000);
      useWoundKit = readline.question("Do you want to use your wound kit to gain 10 health points? \n(Reply Y, Yes, or + to use the wound kit.)\n");
       
      if((useWoundKit === "Y") || (useWoundKit === "Yes") || (useWoundKit === "y") || (useWoundKit === "yes") || (useWoundKit === "+"))
        {
           inventory[indexOfKit] = "empty";
           playerHealth = playerHealth + 10;
        }      
   }

   return [playerHealth, inventory];
}

//* End declaration of function useHealing() *

//* Begin declaration of function processWildmanCombat() *

function processWildmanCombat(wildman, player, playerHealth, weaponDamage, monsterDefense, visitedBlacksmith, inventory) {
      let wildManDefense = monsterDefense;
      console.log("<- You walk away from the village into the badlands for 1 hour ... ->");
      console.log("<-              The sun is about to set ...                        ->");
      sleep(2000);
      console.log("<-   Suddenly, a wildman runs at you from behind a boulder!      ->");
      sleep(2000);
      let playerFight = "N";
      playerFight = readline.question("Do you want to fight the wildman? \n(Reply Y, Yes, or + to fight.)\n");
       
     if((playerFight === "Y") || (playerFight === "Yes") || (playerFight === "y") || (playerFight === "yes") || (playerFight === "+"))
      {
         console.log("<-                     The Battle Begins!!!                         ->");
         sleep(1000);
        if((visitedBlacksmith) && (weaponDamage > 0)){  
          console.log("<-            You fire your revolver and hit the wildman!            ->");
          weaponDamage = weaponDamage - 1;
          monsterDefense = monsterDefense - 1;
          sleep(1000);
          console.log("<-      The wildman hits you with his club and breaks your ribs!      ->");
          sleep(1000);
          playerHealth = playerHealth - 20;

          while((monsterDefense > 0) && (playerHealth > 30) && (weaponDamage > 0)) {
              console.log("<-            You fire and hit the wildman again!            ->");
              sleep(1500);
              weaponDamage = weaponDamage - 1;
              monsterDefense = monsterDefense - 1;
            if(monsterDefense >= 3){
                  console.log("<-      The wildman hits you with his club again and breaks your arm!      ->");
                  playerHealth = playerHealth - 30;
             }
          } 
           if(monsterDefense == 0){
              wildman = false;
              sleep(1500);
              console.log("<-     The wildman is dead, but you are seriously injured!     ->");
              console.log("<-       You must return to the village before nightfall!      ->");
              sleep(1500);
              [playerHealth, inventory] = useHealing(playerHealth, inventory);
              sleep(2000);
            }
           else if(playerHealth <= 30){
            console.log("<-          You are too seriously injured to keep fighting.            ->");
            sleep(1000);
            if(playerHealth <= 0){
                console.log("<-     You are now dead, " + playerName + ", and nightfall is approaching!     ->");
                console.log("<-         Coyotes will devour your body!                 ->");
                gameRunning = false;
                player = false;
             }
            else if(weaponDamage < 1){
                console.log("<-           You have run out of bullets!               ->");
                sleep(1000);
                console.log("<-  You must retreat and head back to the village!      ->");
               }
            else { 
            console.log("<-    Your health is " + playerHealth + " but you still manage to escape.    ->");
            sleep(1500);
            console.log("<- Wildman health is " + monsterDefense + ".  Get healing in the village and come back to finish him later.")
             }
           }
        }

      else { 
              console.log("<-      The wildman hits you with his club and breaks your ribs!      ->");
              playerHealth = playerHealth - 20;

              while(playerHealth > 0) {
                  console.log("<-      The wildman hits you with his club again!      ->");
                  playerHealth = playerHealth - 30;
                 if(playerHealth < 0){
                      gameRunning = false;
                      break;
                  }
             }

            console.log("<-     You are now dead, " + playerName + ", and nightfall is approaching!     ->");
            console.log("<-         Coyotes will devour your body!                 ->");
            gameRunning = false;
            player = false;
         }
      }
      else
      {
        console.log("<-      The wildman throws a rock and hits you ...       ->");
        playerHealth = playerHealth - 20;
        sleep(1000);
        if(playerHealth <= 0) {
            console.log("<-     You are now dead, " + playerName + ", and nightfall is approaching!     ->");
            console.log("<-         Coyotes will devour your body!                 ->");
            gameRunning = false;
            player = false;
         }
         else {
            console.log("<-   ... but you still manage to escape. Your health is " + playerHealth + ". ->");
            sleep(1500);
            [playerHealth, inventory] = useHealing(playerHealth, inventory);
         }
        }
  //    monsterDefense = 5; // monsterDefense does not regenerate for wildmen

    return [wildman, player, playerHealth, weaponDamage, monsterDefense, inventory];
}

//* End declaration of function processWildmanCombat() *

//
//
//*  INITIATE MAIN FOR PLAYING GAME  *
//
//

console.log("<- You have just disembarked the steamboat to walk up to the village of " + villageName + ". ->\n");

//* Selection of player name or character *

let nameOK = false;

let greetLocals = true;
let answer1 = "";
let playerName = "";

// try out sleep() function
sleep(1000);
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
       console.log("Howdy! Welcome to " + villageName + ". I'm Clem the Prospector. Are you the new sheriff?\n");
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

//let correctChoice = false;

correctChoice = false;

//* INITIALIZING CHOICES *
while(correctChoice == false) {

         [placeChoice, correctChoice] =  chooseLocation(currentLocation, previousLocation, atLanding, correctChoice);
         
        // if(correctChoice === true){
        //  gameRunning = true;
        // }
  }
       gameRunning = true;
      
         [currentLocation, previousLocation, gameRunning] = movePlayer(placeChoice, currentLocation, previousLocation, gameRunning);


//* BEGIN MAIN LOOP FOR GAME PLAY *
while(gameRunning) 
{
  if(currentLocation === "status") {
   
    showStatus(playerHealth, playerSilver, previousLocation, inventory, weaponDamage);
    
         // if(previousLocation === "village") {
         //  currentLocation = previousLocation;
         // }
    }


  if((currentLocation === "blacksmith") && (visitedBlacksmith == false)) 
    { 
      if(inventory[0] === "empty")
      {
       console.log("Greetings, Blacksmith, are you selling any weapons?\n");
       console.log("Yes, I have just the thing for you...");
       console.log("It's a six-shot blackpowder revolver.");
       console.log("Of course, it will cost you six silver dollars!");
       // pause dialogue with sleep() function
       sleep(2000);
       console.log("\nThat's pricey for such an old revolver!\n");
       console.log("We're at the end of the boatman's trade route. Buy it or leave it!\n");
       console.log("OK! I'll buy it.");
       // update visitedBlacksmith to true to avoid coming back and losing too much silver
       visitedBlacksmith = true;
       // decrement playerSilver to pay for revolver  
       playerSilver = playerSilver - 6;
       console.log("What about bullets? Right now, this gun only does a damage of " + weaponDamage + ".");
       // pause before laugh with sleep() function
       sleep(1500);
       console.log("Haw! Haw! Haw! Haw!\n");
       console.log("Around here, you're going to need silver bullets!\n");
       // pause after laugh with sleep() function
       sleep(1500);
       console.log("OK! Where do I get silver bullets?\n");
       console.log("From what's left of your silver dollars. " + playerSilver + " is enough for " + playerSilver + " bullets.\n");
       sleep(1500);
       console.log("How about six? I need to eat.\n");
       console.log("Haw! Haw! Haw!");
       sleep(1500);
       console.log("If you're anything like the last two sheriffs, you won't live long enough to need to eat!\n");
       sleep(1500);
       console.log("I'm feeling lucky so it's going to be six silver bullets!\n");
       sleep(1500);
       console.log("All-righty! Six silver bullets it is.\n");
       sleep(3000);
       // decrement playerSilver by 6 to create silver bullets
       playerSilver = playerSilver - 6;
       // increment amount of weaponDamage the revolver can do to the werewolf or other monsters.
       weaponDamage = weaponDamage + 6;
       inventory[0] = "revolver";
     }
     else {
       console.log("Howdy, Sheriff " + playerName + ". Ya need more bullets?\n");
       let needed = 6 - weaponDamage;
       console.log("Why yes, I could use " + needed + ".");
       console.log("All righty Sheriff, that's " + needed + "silver dollars.");
       weaponDamage = weaponDamage + needed;
       playerSilver = playerSilver - needed;
       visitedBlacksmith = true;
     }
    }
  else if((currentLocation === "blacksmith") && (visitedBlacksmith == true))
    {
        console.log("<- You do not have enough silver dollars to visit the blacksmith at this time. ->");
        console.log("<-                     Please choose another location.                         ->\n");
    }
  else if(currentLocation === "village") {
     console.log("=== MIDDLE OF VILLAGE ===");
     console.log("\nExcuse me Mr. Prospector and Mr. Barber, does the hotel over there have food as well as boarding?\n");
     sleep(1500);
     console.log("Tee-Hee-Hee! The hotel turned into a saloon. All you're gonna get thar is whiskey and beer for dinner.\n");
     sleep(2000);
     console.log("Any place else?\n");
     sleep(1500);
     console.log("Don't light out for the badlands yet! I might suggest spending the night in the hotel or in the attic of my Barbershop.\n");
     sleep(2000);
     console.log("Where can I get guns?\n");
     sleep(1500);
     console.log("The Blacksmith Shop!\n");
     sleep(1500);
     console.log("... Or you could go down by the river to the General Store.\n");
     sleep(3000);
   }
 else if(currentLocation === "barbershop"){
    console.log("=== BARBERSHOP IN VILLAGE ===");
    if((playerHealth >= 40) && (playerHealth <= 70)){
      console.log("Okay, Sheriff " + playerName + ". Let me take care of those wounds.");
      console.log("You will need irrigation and cautery for a dollar. An extra dollar for anaesthetic.\n");
      console.log("I don't need anaesthetic!\n");
      console.log("Okay, hold still!!!  You're going to have to spend the night here too.");
      playerHealth = playerHealth + 30;
      playerSilver = playerSilver - 1;
    }
    else if ((playerHealth < 40) || (dogmanBite == true)) {
      console.log("Oh my! Oh my! Poor Sheriff " + playerName + ". Don't worry I've seen worse out here!");
      sleep(1500);
      console.log("You will need irrigation, cautery, and poultices for two dollars. An extra dollar for anaesthetic.\n");
      console.log("I don't need anaesthetic!\n");
      console.log("Okay, hold still!!!  You're going to have to spend the night here too.");
      playerHealth = playerHealth + 40;
      playerSilver = playerSilver - 2;
    }
    else  {
      console.log("Take a pack of bandages with healing poultice into the badlands with you.\n");
      console.log("How much?\n");
      console.log("One silver dollar.");
      playerSilver = playerSilver - 1;
      inventory[2] = "woundKit";
    }
  }
else if(currentLocation === "hotel") {
    console.log("=== HOTEL IN VILLAGE ===");
    if(spokenWithInnkeeper == false){
      console.log("Good evening Sheriff " + playerName + ". I'm Felina the hotel owner.\n");
      sleep(1500);
      console.log("Pleased to make your aquaintance ma'am.\n");
      sleep(1500);
      console.log("I want to help you because if you survive the first week, then you survive!");
      sleep(1500);
      console.log("The best thing to do if you see the werewolf is to run and not fight until you can make friends who can help you.");
      sleep(1500);
      console.log("Even then, you can still get hurt running from the werewolf or any of his infected.\n");
      sleep(1500);
      console.log("Infected!?\n");
      sleep(1500);
      console.log("Yes. The infected were once humans but they got turned into wildmen and dogmen by the werewolf.");
      sleep(1500);
      console.log("The effort to escape a dogman or wildman can cost you 20 health points.");
      sleep(1500);
      console.log("It would take " + monsterDefense + " bullets from a revolver to kill an infected and more to kill the werewolf.");
      sleep(1500);
      console.log("If an infected is wounded to within 2 points of dying, you can finish it off with a knife or tomahawk." );
      sleep(1500);
      console.log("And you will have to go to the barber within a half day to get any of your wounds cauterized.\n");
      sleep(1500);
      console.log("What if I'm too far outside town?\n");
      sleep(1500);
      console.log("Then the Feral Virus in the wounds could turn you into an infected. A healing poultice can give you a whole day to make it back to town.");
      sleep(1500);
      console.log("Just when in doubt, go to Edgar the Barber. I help him by making the herbal healing poultices.");
      sleep(3000);
      console.log("Each of his treatments can restore your health by 30 points.");
      console.log("Or you can buy a pack of bandages and healing poultice from him for when you're stuck in the badlands.\n")
      sleep(3000);
      console.log("So let me get this straight, it takes " + monsterDefense + " bullets to kill an infected?\n");
      sleep(1500);
      console.log("Yes, and a lot more than " + monsterDefense + " to kill the werewolf.");
      sleep(1500);
      console.log("And I can lose 20 health just by escaping one of these monsters while Edgar can give me " + barberHealingValue + " health points?\n");
      sleep(3000);
      console.log("Where do I eat or sleep if I run out of silver?\n");
      sleep(1500);
      console.log("Wildmen are fairly easy to kill. You get a bounty of 2 silver dollars from the General Store for each wildman.\n");
      sleep(1500);
      console.log("What about dogmen?");
      sleep(1500);
      console.log("It's eight silver dollars for each dogman.\n");
      sleep(1500);
      console.log("What's the bounty for the werewolf?\n");
      sleep(1500);
      console.log("You would become the new owner of the General Store and the Grist Mill and the Corn Crib!");
      sleep(1500);
      console.log("...But remember, everyone who has gone after the werewolf either got eaten or infected.");
      sleep(1500);
      console.log("Since the dogmen go about in packs, no one has survived them either.\n");
      spokenWithInnkeeper = true;
    }
    else{
      console.log("Good evening " + innkeeperName + ". \nI would like a room for the next couple of nights so I can recuperate.\n");
      sleep(2000);
      console.log("For 1 silver dollar, you may stay 3 nights and get breakfast in bed every morning!");
      sleep(2000);
      console.log("\nThat's not a bad deal!");
      sleep(2000);
      playerSilver = playerSilver - 1;  // The only instance where the Sheriff can go into debt
      if(playerHealth <= 90) { 
        playerHealth = playerHealth + 10;
      }

      [playerHealth, inventory] = useHealing(playerHealth, inventory);
    }

    sleep(4000);

   }
  else if(currentLocation === "generalStore"){
    console.log("=== GENERALSTORE IN VILLAGE ===");
    if((wildman == false) && (wildmanBounty == false)) {
        console.log("Hi there Sheriff " + playerName + ". Looks like you killed the wildman.\n");
        sleep(1000);
        console.log("Yes! The hotel owner says there's a 2-dollar bounty.\n");
        sleep(1000);
        console.log("That's right!  Here you go, two silver dollars.\n");
        playerSilver = playerSilver + 2;
        wildmanBounty == true;

        if(playerSilver >= 9)
          {
            visitedBlacksmith = false;
            console.log("You may go back to the blacksmith."); 
          }
      } else {
              console.log("Good morning Sheriff " + playerName + ". What would you like to buy?");
      }
  }
  else if(currentLocation === "badlands") {
       console.log("=== OUT IN THE BADLANDS ===");

  if((wildman) && (player)) {
      
     //
       [wildman, player, playerHealth, weaponDamage, monsterDefense, inventory] = processWildmanCombat(wildman, player, playerHealth, weaponDamage, monsterDefense, visitedBlacksmith, inventory);
      //

      }
    else if(wildman === false) {
         console.log("<- The wildman is dead.  Return to the village ... ->");
      }
   }
   

   correctChoice = false;

while((correctChoice == false) && (gameRunning))
 {
   [placeChoice, correctChoice] =  chooseLocation(currentLocation, previousLocation, atLanding, correctChoice);
 }

   [currentLocation, previousLocation, gameRunning] = movePlayer(placeChoice, currentLocation, previousLocation, gameRunning); 

}
