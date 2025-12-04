/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {

  let amountDue = "";

   // if((!isNaN(pricePerKilo) && !isNaN(quantityInKilo) && !isNaN(discountPercentage))){
   //    console.log("Hi!");
   //   }
    if (typeof pricePerKilo === 'string') {
       amountDue = "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    else if(typeof quantityInKilo === 'string') {
       amountDue = "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    else if(typeof discountPercentage === 'string') {
       amountDue = "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    else {
       let amount = pricePerKilo*quantityInKilo - (pricePerKilo*quantityInKilo)*(discountPercentage / 100);
       amountDue = amount.toString();
       
    }
  return amountDue;
}