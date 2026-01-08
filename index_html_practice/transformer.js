/*

The transform() function should accept data as input and transform it

The contents of data folder is fetched from `input.js` file

The function has to transform the data and generate as per the structure given in `expected-output.js`.

The expected-output data is used to render it on the browser using the code provided in `board-renderer.js` file.

The function should return error message 
"Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
if the data is not an object and / or does not contain boards, lists, cards and comments as its array properties

DO NOT MODIFY THE CODE IN OTHER FILES AS IT WILL IMPACT THE TEST OUTCOME AND BROWSER OUTPUT.

*/
export const transform = (data) => {
    // Provide Solution Code Here
    // console.log(data.boards);
    var boardOfInterest = 0;
    var listsOfInterest = [];

    // The loop for the priming read
    Object.entries(data).forEach(([key, value]) => {
        console.log(key);
        
        if(key === "boards"){
            value.forEach((item, index) => {
              boardOfInterest = item.boardId;
              //console.log(boardOfInterest);
            });
          }
        else if(key === "lists"){
            value.forEach((item, index) => {
                if(item.boardId === boardOfInterest){
                    listsOfInterest.push(item.listId);
                    //console.log(`${item.listId} from ${item.boardId}`);
                }
            })
        }

    });

   var newData = Object();

   //console.log(listsOfInterest);

  listsOfInterest.forEach((ident) => {

   Object.entries(data).forEach(([key, value]) => {
        if(key === "boards"){
            newData = {"boards": { "boardId": value[0].boardId, "boardTitle": value[0].boardTitle }};
            console.log(newData);
        }
        else if(key === "lists"){

           // const filteredCards = Object.fromEntries(
                Object.entries(data).filter(([key, value]) => key === "lists" ).forEach(([key, value]) => {
                if(Array.isArray(value)) {
                    value.forEach((item, index) => {
                      if(item.listId === ident){
                          console.log(`In ${item.listId}`);
                          // : ${item.cardTitle} with ${item.cardId}`);
                        }
                       });
                //   });
                 }
               });
           // );
            //console.log(filteredCards);
        }
      else if (key === "cards"){
                Object.entries(data).filter(([key, value]) => key === "cards" ).forEach(([key, value]) => {
                    if(Array.isArray(value)) {
                        value.forEach((item, index) => {
                            if(item.listId === ident){
                                console.log(`${item.cardId} with ${item.cardTitle} for CardID ${item.listId}`);
                            }
                           
                        });
                    }
                });            
      }
  }); 
  });
    return newData;
};