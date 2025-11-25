// Welcome to the simplified Adventure Game based upon late Medieaval weapons
// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let gameRunning = true;
let playerName = "";
let playerHealth = 100;
let playerSilver = 20;  // Starting silver
let currentLocation = "village";

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Base weapon damage
let monsterDefense = 5;    // Monster's defense value
let healingPotionValue = 30;  // How much health is restored

// =========================================
// Enhanced Monster System
// =========================================

let monsters = {
    lizardman: {
        name: 'lizardman',
        monsterDefense: 5,
        habitat: 'hollow log',
        alive: true
    },
    wolfman: {
        name: 'wolfman',
        monsterDefense: 7,
        habitat: 'den in the ground',
        alive: true
    },
    dragon: {
        name: 'dragon',
        monsterDefense: 10,
        habitat: 'cave in a hill',
        alive: true
    }
};

// =========================================
// Enhanced 'items' System: With Properties
// =========================================

const items = {
    healthPotion: {
      name: "potion",
      type: "medicine",
      value: 5,     // Cost in silver
      effect: 30,   // Healing amount
      description: "Restores 30 health points"
    },
    bandages: {
        name: "Bandages",
        type: "medicine",
        value: 2,
        effect: 10,
        description: "Restores 10 health points"
    },
    sword: {
      name: "Sword",
      type: "weapon",
      value: 10,    // Cost in silver
      effect: 1,   // Damage amount
      description: "A wrought-iron blade for combat"
    },
  steelSword: {
      name: "steelSword",
      type: "weapon",
      value: 20,
      effect: 2,
      description: "A fine steel sword for combat"
    }
};

// Create empty inventory array (from previous lab)
let inventory = [];  // Will now store item objects instead of strings

// ===========================
// Display Functions
// Functions that show game information to the player
// ===========================

/**  Define a sleep function
 * @param (integer) for time in milliseconds
 * @returns no explicit value just syncronously pauses program execution
*/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

/**
 * Shows the player's current stats
 * Displays health, silver, and current location
 */
function showStatus() {
    console.log("\n=== " + playerName + "'s Status ===");
    console.log(" Health: " + playerHealth);
    console.log(" Silver: " + playerSilver);
    console.log(" Location: " + currentLocation);
    
    // Enhanced inventory display with item details
    console.log(" Inventory: ");
    if (inventory.length === 0) {
        console.log("   Nothing in inventory");
    } else {
        inventory.forEach((item, index) => {
            console.log("   " + (index + 1) + ". " + item.name + " - " + item.description);
        });
    }
}

/**
 * Shows the current location's description and available choices
 */
function showLocation() {
    console.log("\n=== " + currentLocation.toUpperCase() + " ===");
    
    if (currentLocation === "village") {
        console.log("You're in a bustling village. The blacksmith and market are nearby.");
        console.log("\nWhat would you like to do?");
        console.log("1: Go to blacksmith");
        console.log("2: Go to market");
        console.log("3: Enter forest");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("0: Quit game");
    } 
    else if (currentLocation === "blacksmith") {
        console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
        console.log("\nWhat would you like to do?");
        console.log("1: Buy sword (" + items.sword.value + " silver)");
        console.log("2: Return to village");
        console.log("3: Check status");
        console.log("4: Use item");
        console.log("5: Help");
        console.log("0: Quit game");
    }
    else if (currentLocation === "market") {
        console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
        console.log("\nWhat would you like to do?");
        console.log("1: Buy potion (" + items.healthPotion.value + " silver)");
        console.log("2: Buy bandages (" + items.bandages.value + " silver)");
        console.log("3: Return to village");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("0: Quit game");
    }
    else if (currentLocation === "forest") {
        console.log("The forest is dark and foreboding. You hear strange noises all around you.");
        console.log("\nWhat would you like to do?");
        console.log("1: Return to village");
        console.log("2: Check status");
        console.log("3: Use item");
        console.log("4: Help");
        console.log("0: Quit game");
    }
}

// ==============================================================
// Combat Function: Handles battles with several types of monster
// ==============================================================

/**
 * Checks if player has an item of specified type 
 * @param {string} type The type of item to check for
 * @returns {boolean} True if player has the item type
 */
function hasItemType(type) {
    return inventory.some(item => item.type === type);
}

function hasItemName(name){
    return inventory.some(item => item.name === name);
}

/**
 * Handles monster battles for any monsterName and monsterDefense
 * Checks if player has weapon, manages combat results, and updates health
 * @returns {boolean} true if player wins, false if they retreat
 */
function handleCombat(monsterName, monsterDefense, playerHealth, playerName) {

       let monsterAlive = true;
       console.log("<- Suddenly, a " + monsterName + " creature comes up out of a hole in the ground ->");
       sleep(2000);
       let playerFight = "N";
       playerFight = readline.question("Do you want to fight the " + monsterName + "? \n(Reply Y, Yes, or + to fight.)\n");
       
 if((playerFight === "Y") || (playerFight === "Yes") || (playerFight === "y") || (playerFight === "yes") || (playerFight === "+"))
    {
         console.log("<-                     The Battle Begins!!!                         ->");
    // Updated to check for item type instead of specific string
    if (hasItemType("weapon")) {
        let weapon = inventory.find(item => item.type === "weapon");
        while(monsterDefense > 0) {
           // Find the weapon to get its properties
            console.log("You strike with your " + weapon.name + "!");
            sleep(1000);
            console.log("You deal " + weapon.effect + " point of damage to the monster!");
            sleep(1000);
            monsterDefense = monsterDefense - weapon.effect;
            console.log("The " + monsterName + " strikes back with his claws and deals 10 health points of damage to you.");
            sleep(1000);
            playerHealth = updateHealth(playerHealth, -10);
           if(playerHealth <= 0){
               // Player must expire if health level reaches zero, this isn't a zombie game!
               console.log("You are now dead " + playerName + " and the " + monsterName + " will eat your body!"); 
               break;
           }
           else if(monsterDefense == 0){
              console.log("Victory! The " + monsterName + " is dead and you found his hoard of 10 silver dollars!");
              playerSilver += 10;
              monsterAlive = false;
           }
         }
    } else {
        console.log("Without a weapon, you must retreat!");
        playerHealth = updateHealth(playerHealth, -20);
        if(playerHealth <= 0){

        }
        
     }
   }
   return [monsterDefense, monsterAlive, playerHealth];
}

/**
 * Updates player health, keeping it between 0 and 100
 * @param {number} amount Amount to change health by (positive for healing, negative for damage)
 * @returns {number} The new health value
 */
function updateHealth(playerHealth, amount) {
    playerHealth += amount;
    
    if (playerHealth > 100) {
        playerHealth = 100;
        console.log("You're at full health!");
    }
    if (playerHealth < 0) {
        playerHealth = 0;
        console.log("You're mortally wounded!");
    }
    
    console.log("Health is now: " + playerHealth);
    return playerHealth;
}

// ===========================
// Item Functions
// Functions that handle item usage and inventory
// ===========================

/**
 * Handles using items like potions
 * @returns {boolean} true if item was used successfully, false if not
 */
function useItem(playerHealth) {
    if (inventory.length === 0) {
        console.log("\nYou have no items!");
        return false;
    }

    console.log("\n=== Inventory ===");
    inventory.forEach((item, index) => {
        console.log((index + 1) + ". " + item.name);
    });
    
    let choice = readline.question("Use which item? (number or 'cancel'): ");
    if (choice === 'cancel') return false;
    
    let index = parseInt(choice) - 1;
    if (index >= 0 && index < inventory.length) {
        let item = inventory[index];
        
        if (item.name === "potion") {
            console.log("\nYou drink the " + item.name + ".");
            playerHealth = updateHealth(playerHealth, item.effect);
            inventory.splice(index, 1);
            console.log("Health restored to: " + playerHealth);
        } else if (item.type === "Bandages") {
            console.log("\nYou apply the " + item.name + ".");
            playerHealth = updateHealth(playerHealth, item.effect);
            inventory.splice(index, 1);
            console.log("Health restored to: " + playerHealth);
        }
            else if (item.type === "weapon") {
            console.log("\nYou ready your " + item.name + " for battle.");
        }
    } else {
        console.log("\nInvalid item number!");
    }
    return playerHealth;
}

/**
 * Displays the player's inventory
 */
function checkInventory() {
    console.log("\n=== INVENTORY ===");
    if (inventory.length === 0) {
        console.log("Your inventory is empty!");
        return;
    }
    
    // Display all inventory items with numbers and descriptions
    inventory.forEach((item, index) => {
        console.log((index + 1) + ". " + item.name + " - " + item.description);
    });
}

// ===========================
// Shopping Functions: buyFromBlacksmith() and goToMarket()
// ===========================

/**
 * Handles purchasing items at the blacksmith
 */
function buyFromBlacksmith() {
    if (playerSilver >= items.sword.value) {
        
        if(hasItemName('Sword')){
            console.log("You already have a plain, iron sword.\n");
            console.log("Choose another item from the blacksmith.");
        }
        else {
        // Add sword object to inventory instead of just the name
        inventory.push({...items.sword}); // Create a copy of the sword object
        console.log("\nBlacksmith: 'A fine blade for a brave adventurer!'");
        playerSilver -= items.sword.value;
        
        console.log("You bought a " + items.sword.name + " for " + items.sword.value + " silver!");
        console.log("Silver remaining: " + playerSilver);
        }
    } else {
        console.log("\nBlacksmith: 'Come back when you have more silver!'");
    }
}

/**
 * Handles purchasing items at the market
 */
function goToMarket(getPotion) {
    if ((playerSilver >= items.healthPotion.value) && (getPotion)) {
        console.log("\nMerchant: 'This potion will heal wounds and counteract dragon-poison!'");
        playerSilver -= items.healthPotion.value;
       // Add potion object to inventory instead of just the name
        inventory.push({...items.healthPotion}); // Create a copy of the potion object
        console.log("You bought a " + items.healthPotion.name + " for " + items.healthPotion.value + " silver!");
        console.log("Silver remaining: " + playerSilver);
    } else if(playerSilver >= items.bandages.value){
        console.log("\nMerchant: 'These bandages will heal wounds a little bit!'");
        playerSilver -= items.bandages.value;
       // Add potion object to inventory instead of just the name
        inventory.push({...items.bandages}); // Create a copy of the potion object
        console.log("You bought a " + items.bandages.name + " for " + items.bandages.value + " silver!");
        console.log("Silver remaining: " + playerSilver);
    }
    else
    {
        console.log("\nMerchant: 'No silver, no medicines!'");
    }
}

// ===========================
// Help System
// Provides information about available commands
// ===========================

/**
 * Shows all available game commands and how to use them
 */
function showHelp() {
    console.log("\n=== AVAILABLE COMMANDS ===");
    
    console.log("\nMovement Commands:");
    console.log("- In the village, choose 1-3 to travel to different locations");
    console.log("- In other locations, choose the return option to go back to the village");
    
    console.log("\nBattle Information:");
    console.log("- You need a weapon to win battles");
    console.log("- Weapons have different damage values");
    console.log("- Monsters appear in the forest");
    console.log("- Without a weapon, you'll lose health when retreating");
    
    console.log("\nItem Usage:");
    console.log("- Health potions restore health based on their effect value");
    console.log("- You can buy potions at the market for " + items.healthPotion.value + " silver");
    console.log("- You can buy bandages at the market for " + items.bandages.value + " silver");
    console.log("- You can buy a sword at the blacksmith for " + items.sword.value + " silver");
    
    console.log("\nOther Commands:");
    console.log("- Choose the status option to see your health and silver");
    console.log("- Choose the help option to see this message again");
    console.log("- Choose the quit option to end the game");
    
    console.log("\nTips:");
    console.log("- Keep healing potions for dangerous areas");
    console.log("- Defeat monsters to earn silver");
    console.log("- Health can't go above 100");
}

// ===========================
// Movement Functions: move() and () handle player movement
// ===========================

/**
 * Handles movement between locations
 * @param {number} choiceNum The chosen option number
 * @returns {boolean} True if movement was successful
 */
function move(choiceNum) {
    let validMove = false;
    
    if (currentLocation === "village") {
        if (choiceNum === 1) {
            currentLocation = "blacksmith";
            console.log("\nYou enter the blacksmith's shop.");
            validMove = true;
        }
        else if (choiceNum === 2) {
            currentLocation = "market";
            console.log("\nYou enter the market.");
            validMove = true;
        }
        else if (choiceNum === 3) {
            currentLocation = "forest";
            console.log("\nYou venture into the forest...");
            validMove = true;
            
            // BEGIN COMBAT AFTER ENTERING FOREST:
            
            
            
            if(monsters.lizardman.alive) {
              console.log(monsters.lizardman.name + " health is " + monsters.lizardman.monsterDefense);
              [monsters.lizardman.monsterDefense, monsters.lizardman.alive, playerHealth] = handleCombat(monsters.lizardman.name, monsters.lizardman.monsterDefense, playerHealth, playerName);
              console.log(monsters.lizardman.name + " health is " + monsters.lizardman.monsterDefense);
            }
            else if(monsters.wolfman.alive){
              console.log(monsters.wolfman.name + " health is " + monsters.wolfman.monsterDefense);
              [monsters.wolfman.monsterDefense, monsters.wolfman.alive, playerHealth] = handleCombat(monsters.wolfman.name, monsters.wolfman.monsterDefense, playerHealth, playerName);
              console.log(monsters.wolfman.name + " health is " + monsters.wolfman.monsterDefense);
            }
            else if(monsters.dragon.alive){
               console.log(monsters.dragon.name + " health is " + monsters.dragon.monsterDefense);
               [monsters.dragon.monsterDefense, monsters.dragon.alive, playerHealth] = handleCombat(monsters.dragon.name, monsters.dragon.monsterDefense, playerHealth, playerName);
               console.log(monsters.dragon.name + " health is " + monsters.dragon.monsterDefense);
              }
            else{
                console.log("Congratultations, " + playerName + ". All monsters have been vanquished!");
            }
            
            

        }
    }
    else if (currentLocation === "blacksmith") {
        if (choiceNum === 2) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
    }
    else if (currentLocation === "market") {
        if (choiceNum === 3) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
    }
    else if (currentLocation === "forest") {
        if (choiceNum === 1) {
            currentLocation = "village";
            console.log("\nYou hurry back to the safety of the village.");
            validMove = true;
        }
    }
    
    return validMove;
}

// ===========================
// Input Validation
// Functions that validate player input
// ===========================

/**
 * Validates if a choice number is within valid range
 * @param {string} input The user input to validate
 * @param {number} max The maximum valid choice number
 * @returns {boolean} True if choice is valid
 */
function isValidChoice(input, max) {
    if (input === "") return false;
    let num = parseInt(input);
    return num >= 1 && num <= max;
}

// ===========================
// Main Game Loop
// Controls the flow of the game
// ===========================

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon or lizardman in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerSilver + " silver.");

while (gameRunning) {
    // Show current location and choices
    showLocation();
    
    // Get and validate player choice
    let validChoice = false;
    while (!validChoice) {
        try {
            let choice = readline.question("\nEnter choice (number): ");
            
            // Check for empty input
            if (choice.trim() === "") {
                throw "Please enter a number!";
            }
            
            // Convert to number and check if it's a valid number
            let choiceNum = parseInt(choice);
            if (isNaN(choiceNum)) {
                throw "That's not a number! Please enter a number.";
            }
            
            // Handle choices based on location
            if (currentLocation === "village") {
                if (choiceNum < 0 || choiceNum > 6) {
                    throw "Please enter a number between 0 and 6.";
                }
                
                validChoice = true;
                
                if ((choiceNum <= 3) && (choiceNum > 0)) {
                    move(choiceNum);
                }
                else if (choiceNum === 4) {
                    showStatus();
                }
                else if (choiceNum === 5) {
                    playerHealth = useItem(playerHealth);
                }
                else if (choiceNum === 6) {
                    showHelp();
                }
                else if (choiceNum === 0) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "blacksmith") {
                if (choiceNum < 0 || choiceNum > 5) {
                    throw "Please enter a number between 0 and 5.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    buyFromBlacksmith();
                }
                else if (choiceNum === 2) {
                    move(choiceNum);
                }
                else if (choiceNum === 3) {
                    showStatus();
                }
                else if (choiceNum === 4) {
                    playerHealth = useItem(playerHealth);
                }
                else if (choiceNum === 5) {
                    showHelp();
                }
                else if (choiceNum === 0) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "market") {
                if (choiceNum < 0 || choiceNum > 5) {
                    throw "Please enter a number between 0 and 5.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    goToMarket(true);
                }
                if (choiceNum === 2){
                    goToMarket(false);
                }
                else if (choiceNum === 3) {
                    move(choiceNum);
                }
                else if (choiceNum === 4) {
                    showStatus();
                }
                else if (choiceNum === 5) {
                   playerHealth = useItem(playerHealth);
                }
                else if (choiceNum === 6) {
                    showHelp();
                }
                else if (choiceNum === 0) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "forest") {
                if (choiceNum < 0 || choiceNum > 4) {
                    throw "Please enter a number between 1 and 5.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    move(choiceNum);
                }
                else if (choiceNum === 2) {
                    showStatus();
                }
                else if (choiceNum === 3) {
                    playerHealth = useItem(playerHealth);
                }
                else if (choiceNum === 4) {
                    showHelp();
                }
                else if (choiceNum === 0) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            
        } catch (error) {
            console.log("\nError: " + error);
            console.log("Please try again!");
        }
    }

    // Check if player died
    if (playerHealth <= 0) {
        console.log("\nGame Over! Your health reached 0!");
        gameRunning = false;
    }
}

// =========================================
// END Lab: Enhanced Item System
// =========================================