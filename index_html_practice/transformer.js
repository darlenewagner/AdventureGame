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
    var listSeen = [];
    var cardSeen = [];
    var commentSeen = [];

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
                console.log(`{lists: { boardId: ${item.boardId}, listId: ${item.listId}}, `);
                if(!listSeen.includes(item.listId)){
                    var lookFor = item.listId;
                   Object.entries(data).filter(([key, value]) => key === "cards").forEach(([key, value]) => {
                      value.forEach((item, index) => {
                          if(item.listId === lookFor){
                              console.log(`{listId: ${lookFor}, cardId: ${item.cardId}}, `);
                              var findCard = item.cardId;

                              if(!cardSeen.includes(item.cardId)){
                                  Object.entries(data).filter(([key, value]) => key === "comments").forEach(([key, value]) => {
                                  value.forEach((item, index) => {
                                    if(item.cardId === findCard){
                                        console.log(`{cardId: ${item.cardId}, commentId: ${item.commentId}}`);
                                    }
                                  });
                                });
                                cardSeen.push(item.cardId);
                              }
                              else {
                                    Object.entries(data).filter(([key, value]) => key === "comments").forEach(([key, value]) => {
                                    value.forEach((item, index) => {
                                    if(item.cardId === findCard){
                                        console.log(`{cardId: ${item.cardId}, commentId: ${item.commentId}}`);
                                    }
                                  });
                                });

                              }
                          }
                      });
                   });
                    listSeen.push(item.listId);
                }
                else{
                    //console.log(index);
                }
            });
          }
       // else if(key === "cards"){
       //     value.forEach((item, index) =>{
       //         console.log(`${item.listId} -> ${item.cardId}`);
       //     });
       // }
       // else if(key === "comments"){
       //     value.forEach((item, index) => {
       //         console.log(`${item.cardId} -> ${item.commentId}`);
       //     });
       // }


    });

   var newData = Object();

   //console.log(listsOfInterest);

  let head = 0;
  let currentListId = 0;
  let currentCardId = 0;


 // listsOfInterest.forEach((ident) => {

    Object.entries(data).forEach(([key, value]) => {
        if(key === "boards"){
                Object.entries(data).filter(([key, value]) => key === "boards" ).forEach(([key, value]) => {
                if(Array.isArray(value)) {
                   value.forEach((item, index) => {
                      if((item.boardId === 110) && (head === 0)){
                        newData = {"boards": { "boardId": value[0].boardId, "boardTitle": value[0].boardTitle }};
                        head = value[0].boardId;
                        //console.log(newData);
                      }
                      //head++;
                   });
                }
           });
        }
     else if(key === "lists"){

           // const filteredCards = Object.fromEntries(
                Object.entries(data).filter(([key, value]) => key === "lists" ).forEach(([key, value]) => {
                if(Array.isArray(value)) {
                    value.forEach((item, index) => {
                      if(item.boardId === head){
                          //console.log(`In ${item.listId}`);
                          currentListId = item.listId;
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
                            if(item.listId === currentListId){
                            //    console.log(`${item.cardId} with ${item.cardTitle} for ListID ${item.listId}`);
                                currentCardId = item.cardId;
                            }
                                                    
                        });
                    }
                });            
        }
      else if (key === "comments"){
                Object.entries(data).filter(([key, value]) => key === "comments" ).forEach(([key, value]) => {
                    if(Array.isArray(value)) {
                        value.forEach((item, index) => {
                            if(item.cardId === currentCardId){
                              //  console.log(`${item.commentId} with ${item.commentText} for CardID ${item.cardId}`);
                            }
                           
                        });
                    }
                });
      }
    }); 
 // });
    return newData;
};