// Testing Array Operations
const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Esbeda Wallet', 250],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-Shirt', 500],
    ['Smiley T-Shirt', 50],
    ['Smiley T-Shirt', 250],
    ['Shinie Nail Paint', 10]
];

const campingStuff = [
    ['hatchet', 'cutting', 30],
    ['folding saw', 'cutting', 25],
    ['ferro rod', 'fire', 20],
    ['water filter', 'water', 20],
    ['kettle', 'cooking', 30],
    ['sleeping bag', 'bedding', 45],
    ['mattress', 'bedding', 30],
    ['frying pan', 'cooking', 35],
    ['camp spoon', 'cooking', 5],
    ['canteen', 'water', 10],
    ['tent', 'shelter', 60]
]

const premiumProducts = products.filter(product => product[1] > 300);

console.log(premiumProducts);

const filteredProducts = products.filter(product => product[1] <= 300);

const nonPremiumProducts = filteredProducts.map(product => [product[0], product[1] - product[1]*15/100]);

console.log(nonPremiumProducts);

let productStock = campingStuff.reduce((classification, product)=>{
    let stockItem = classification.find(category => category[0] === product[1]);
    if(!stockItem)
        classification.push([product[1],1]);
    else
        ++stockItem[1];

    return classification;
},[]);

//console.log(productStock)

let total = campingStuff.reduce((accumulator, currentValue) => accumulator + currentValue[2], 0);

console.log(total);

let average = campingStuff.reduce((accumulator, currentValue) => (accumulator + currentValue[2]), 0)/campingStuff.length;

console.log(average);


let someAverages = campingStuff.reduce((accumulator, currentValue)=>{
    let stockItem = accumulator.find(category => category[0] === currentValue[1]);
    if(!stockItem){
        var tempArr = [currentValue[1], currentValue[2], 1];
        accumulator.push(tempArr);
       }
    else{
        stockItem[1] = stockItem[1] + currentValue[2];
        ++stockItem[2];
    }

    return accumulator;
},[]);

someAverages.forEach((myRow, index) => {
    myRow[1] = myRow[1]/myRow[2];
});

console.log(someAverages);

//const calculateDiscountedPrice = discount => {
//    for(let i = 0; i < products.length; i++){
//        products[i][1] = products[i][1] - products[i][1]*discount/100;
//   }
///}

//const calculateDiscountedPrice = discount => products.map(
//    product => [product[0], product[1]-product[1]*discount/100]
//)

//let discountedPrices = calculateDiscountedPrice(10);

//console.log(products);

//console.log(discountedPrices);
