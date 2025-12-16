// Testing Array Operations
const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Esbeda Wallet', 250],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 500],
    ['Smiley T-Shirt', 50],
    ['Shinie Nail Paint', 100],
    ['Shinie Nail Paint', 250]
];


const nonPremiumProducts = products.filter(product => product[1] <= 300)
      .map(prod => [prod[0].toUpperCase(), prod[1]])
      .reduce((accumulator, currentProduct)=>{
         let stockItem = accumulator.find(item=>item[0]===currentProduct[0]);
         if(!stockItem) {
             accumulator.push([currentProduct[0], 1]);
            }
          else {
             ++stockItem[1];
          }
          return accumulator;
      },[]);

console.log(nonPremiumProducts);

