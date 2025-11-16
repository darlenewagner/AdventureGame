let readline = require('readline-sync');
// Get the age
let age = readline.question("What is your age? ");
// Add your validation code here
try {
    let numericalAge = Number(age);
    
    if(isNaN(numericalAge)){
        throw "Input is not a number!";
    }

    if((numericalAge < 0) || (numericalAge > 120)){
        throw "Not a valid number for age!";
    }

    if(numericalAge >= 16){
        console.log("You are eligible to apply for a driver's licence.");
    }
    else {
        console.log("You are not yet eligible to apply for a driver's licence.")
    }
    
} catch (error) {
    console.log("Error: ", error);
}