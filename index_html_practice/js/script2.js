// Testing Array Operations
const products = [
    {productName: 'Gucci Round Bucklet Belt', price: 400},
    {productName: 'Gucci Round Bucklet Belt', price: 450},
    {productName: 'Gucci Round Bucklet Belt', price: 400},
    {productName: 'Gucci Round Bucklet Belt', price: 300},
    {productName: 'Smiley T-Shirt', price: 500},
    {productName: 'Smiley T-Shirt', price: 50},
    {productName: 'Shinie Nail Paint', price: 100},
    {productName: 'Shinie Nail Paint', price: 250},
    {productName: 'Esbeda Wallet', price: 250}
];

let premiumProducts = products.filter(product => product.price > 300)
                              .map(product => {
                                  return {
                                      productName: product.productName.toUpperCase(),
                                      price: product.price
                                  }
                              })
                              .reduce((stocks, currentProduct) => {
                                  let stockItem = stocks.find(product => product.productName === currentProduct.productName);
                                  if(stockItem){
                                    ++stockItem.stock;
                                  }
                                  else{
                                        stocks.push({productName: currentProduct.productName,
                                        stock: 1
                                    })
                                  }
                                  return stocks;
                              }, []);

console.log(premiumProducts);
