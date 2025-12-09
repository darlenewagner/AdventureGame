/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(rows) {

let pattern = "";

  if(typeof rows === 'number'){

     for(let l = 0; l < rows - 1; l++){
        pattern = pattern + " ";
      }
     for(let s = rows - 1; s <= rows - 1; s++){
        pattern = pattern + "* ";
      }
      pattern = pattern + "\n";

  for(let r = 1; r < rows; r++){
     for(let l = 0; l < rows - r - 1; l++){
        pattern = pattern + " ";
      }
     for(let s = rows - r - 1; s < rows; s++){
           pattern = pattern + "* ";
      }
        pattern = pattern + "\n"; 
  }
    
  }

else if (typeof rows === 'string') {
   pattern = "Invalid Input Type, Row Input Should Be of Type Number !!";
}
else{
   pattern = "Invalid Input Type, Row Input Should Be of Type Number !!";
}

return pattern;

}
